'use strict';

module.exports.process = async (event, context) => {
  const data = JSON.parse(event.body)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      coordinates: data.coordinates,
      dataUri: data.dataUri
    }),
  };

};
