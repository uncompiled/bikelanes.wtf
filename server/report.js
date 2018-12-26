'use strict'

const imageDataURI = require('image-data-uri')
const tweetImage = require('./tweet')

module.exports.process = async (event, context) => {
  const { coordinates, dataUri } = JSON.parse(event.body)
  const image = imageDataURI.decode(dataUri)

  const tweet = await tweetImage(image, coordinates)

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      coordinates,
      tweet
    })
  }

  return response
}
