'use strict';
require('dotenv').config();
const AWS = require('aws-sdk');
const fetch = require('node-fetch');
const truncate = require('truncate');
const reCapUrl = 'https://www.google.com/recaptcha/api/siteverify';

AWS.config.update({ region: 'us-east-2' });
var dynamoDb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

/**
 * Stores Guest Entry into Dynamo DB in a "synchronous" fashion using async/wait
 * @param {boolean} accepted
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} age
 */
const storeGuest = async (accepted, firstName, lastName, age) => {
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
  return await new Promise((resolve, reject) => {
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
exports.handler = (event, context, callback) => {
  let body = {};
  let statusCode = 201;

  // process.env.RE_CAPTCHA_SECRET_KEY

  if (event.body) {
    body = JSON.parse(event.body);
    // validate
    if (
      typeof body.accepted !== undefined &&
      Array.isArray(body.guests) &&
      body.guests.length < 10
    ) {
      const accepted = body.accepted === true;
      body.guests.map(guest => {
        const firstName = truncate(String(guest.firstName), 20, {
          ellipsis: null
        });
        const lastName = truncate(String(guest.lastName), 20, {
          ellipsis: null
        });
        const age = truncate(String(guest.age), 7, { ellipsis: null });
        try {
          storeGuest(accepted, firstName, lastName, age);
        } catch (e) {
          console.log('failed to write to dynamodb, with code:', e.code);
          // internal error
          statusCode = 500;
        }
      });
    } else {
      // bad request
      statusCode = 400;
    }
  }
  // standard response object
  var response = {
    statusCode: statusCode,
    headers: {},
    body: null
  };
  callback(null, response);
};
