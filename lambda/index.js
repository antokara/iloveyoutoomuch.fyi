'use strict';
const AWS = require('aws-sdk');
const fetch = require('node-fetch');
const truncate = require('truncate');
const reCapUrl = 'https://www.google.com/recaptcha/api/siteverify';

// we got this from personal reCaptcha Google Page
const reCaptchaSecret = 'yyy';

('use strict');

// @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
exports.handler = function(event, context, callback) {
  let body = {};
  if (event.body) {
    body = JSON.parse(event.body);
    // convert to specific types and validate
    const accepted = body.accepted === true;
    body.guests.map(function(guest) {
      const firstName = truncate(String(guest.firstName), 20, {
        ellipsis: null
      });
      const lastName = truncate(String(guest.lastName), 20, { ellipsis: null });
      const age = truncate(String(guest.age), 7, { ellipsis: null });
      console.log('accepted: ', accepted, firstName, lastName, age);
    });
  }
  // standard response object
  var response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(body)
  };
  callback(null, response);
};
