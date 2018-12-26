const fetch = require('node-fetch')

const TOKEN = process.env.LOCATIONIQ_TOKEN

async function getLocation (coordinates) {
  const { latitude, longitude } = coordinates

  const params = `?key=${TOKEN}&lat=${latitude}&lon=${longitude}&format=json`
  const apiUrl = `https://us1.locationiq.com/v1/reverse.php${params}`

  const response = await fetch(apiUrl)
  const data = await response.json()

  return data
}

module.exports = getLocation
