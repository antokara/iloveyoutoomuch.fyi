'use strict';
// require('dotenv').config();
const AWS = require('aws-sdk');
// const fetch = require('node-fetch');
const reCapUrl = 'https://www.google.com/recaptcha/api/siteverify';

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
 * @return Promise
 */
const storeGuest = (accepted, firstName, lastName, age) => {
  var params = {
    Item: {
      id: {
        S: new Date().toISOString()
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
      }
    },
    TableName: 'iloveyoutoomuch.fyi-rsvp'
  };

  // wait for the promise to return
  return new Promise((resolve, reject) => {
    // handle db client failure
    try {
      dynamoDb.putItem(params, (err, data) => {
        // handle db server failure
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

// @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
exports.handler = async event => {
  const reponse = {};
  reponse.code = 201;
  // process.env.RE_CAPTCHA_SECRET_KEY
  await asyncForEach(event.guests, async guest => {
    try {
      await storeGuest(
        event.accepted,
        guest.firstName,
        guest.lastName,
        guest.age
      );
    } catch (e) {
      console.log('failed to write to dynamodb, with code:', e.code);
      // internal error
      reponse.code = 500;
      reponse.message = 'failed to write to db';
    }
  });

  return reponse;
};
