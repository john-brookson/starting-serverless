'use strict';

module.exports.hello = (event, context, callback) => {

  let result = 0

  if (typeof event.queryStringParameters !== "undefined") {
    if (
      typeof event.queryStringParameters.a !== "undefined" &&
      typeof event.queryStringParameters.b !== "undefined") {
      const a = event.queryStringParameters.a;
      const b = event.queryStringParameters.b;
      result = (parseFloat(a) + parseFloat(b));
    }
  }


  const response = {
    statusCode: 200,
    body: JSON.stringify({
      resultado: result
    }),
  };

  callback(null, response);
};