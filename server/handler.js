'use strict';

module.exports.report = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      event,
      context
    }),
  };

};
