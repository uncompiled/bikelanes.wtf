const Twitter = require('twitter')
const getStatus = require('./status')

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

async function tweetImage (image, coordinates) {
  try {
    const media = await client.post('media/upload', { media: image.dataBuffer })
    const tweet = await client.post('statuses/update', await getStatus(media, coordinates))

    return tweet
  } catch (error) {
    console.error(error)
  }
}

module.exports = tweetImage
