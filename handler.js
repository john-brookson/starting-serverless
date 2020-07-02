'use strict';

module.exports.hello = (event, context, callback) => {

  let result = 'Informe os parametros para a soma no formato: /soma?a={numero}&b={numero}.'

  if (event.queryStringParameters != null) {
    result = parseFloat(event.queryStringParameters.a) + parseFloat(event.queryStringParameters.b)
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      resultado: result
    }),
  };

  callback(null, response);
};