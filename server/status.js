const getLocation = require('./locationiq')

async function generateStatus (media, coordinates) {
  const location = await getLocation(coordinates)
  const mapUrl = `https://www.google.com/maps/@${coordinates.latitude},${coordinates.longitude},16z`
  const status = `Obstruction reported near:
${location.display_name}
${mapUrl} ${hashtags(location)}
`

  return {
    status,
    media_ids: media.media_id_string
  }
}

function hashtags (location) {
  return `#VisionZero ${getState(location)}`
}

function getState (location) {
  switch (location.address.state) {
    case 'District of Columbia':
      return '#BikeDC'
    default:
      return `#Bike${location.address.state.replace(/\s/g, '')}`
  }
}

module.exports = generateStatus
