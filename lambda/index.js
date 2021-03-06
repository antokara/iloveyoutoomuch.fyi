'use strict';
require('dotenv').config();
const AWS = require('aws-sdk');
const fetch = require('node-fetch');
const uuidv4 = require('uuid/v4');
const GOOGLE_RECAPTCHA_VERIFY_URL =
  'https://www.google.com/recaptcha/api/siteverify';
AWS.config.update({ region: 'us-east-2' });
var dynamoDb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

/**
 * forEach that supports async await
 *
 * @param {array} array
 * @param {function} callback
 * @see https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
 */
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

/**
 * Stores Guest Entry into Dynamo DB
 * @param {boolean} accepted
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} age
 * @param {string} sourceIP
 * @return Promise
 */
const storeGuest = (accepted, firstName, lastName, age, sourceIP) => {
  var params = {
    Item: {
      id: {
        S: uuidv4()
      },
      firstName: {
        S: firstName
      },
      lastName: {
        S: lastName
      },
      age: {
        S: age
      },
      accepted: {
        BOOL: accepted
      },
      created: {
        S: new Date().toISOString()
      },
      sourceIP: {
        S: sourceIP
      }
    },
    TableName: 'iloveyoutoomuch.fyi-rsvp'
  };

  return dynamoDb.putItem(params).promise();
};

// @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
exports.handler = async event => {
  // which token was provided?
  if (event.tokenV2) {
    // Google reCaptcha v2
    const reCaptchaResponse = await fetch(GOOGLE_RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RE_CAPTCHA_V2_SECRET_KEY}&response=${
        event.tokenV2
      }`
    });
    const data = await reCaptchaResponse.json();
    // verify the token and the validate the score
    if (!data.success) {
      throw new Error(`code: 401, failed: ${data.success}`);
    }
  } else if (event.tokenV3) {
    // Google reCaptcha v3
    const reCaptchaResponse = await fetch(GOOGLE_RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RE_CAPTCHA_V3_SECRET_KEY}&response=${
        event.tokenV3
      }`
    });
    const data = await reCaptchaResponse.json();
    // verify the token and the validate the score
    if (!data.success || data.score < 0.5) {
      throw new Error(`code: 401, failed: ${data.success}, ${data.score}`);
    }
  } else {
    // we need a token
    throw new Error('code: 400');
  }

  // iterate and store each guest
  await asyncForEach(event.guests, async guest => {
    try {
      await storeGuest(
        event.accepted,
        guest.firstName,
        guest.lastName,
        guest.age,
        event.sourceIP
      );
    } catch (e) {
      console.log('failed to write to dynamodb, with code:', e.code);
      // internal error
      throw new Error('code: 500, failed to write to db');
    }
  });

  // only if this was returned consider the response successful
  // we use mapping to convert it to a 201 http code response
  // that way, if the lambda times-out, we return a 500 instead
  // because a blank/time-out response, will not match...
  throw new Error('result: success');
};
