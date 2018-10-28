import React from "react"
import Camera from "react-html5-camera-photo"
import "react-html5-camera-photo/build/css/index.css"

import { backend } from '../../Config'

const CameraContainer = ({
  isGeolocationAvailable,
  isGeolocationEnabled,
  positionError,
  coords
}) => {
  return <Camera onTakePhoto={dataUri => onTakePhoto(coords, dataUri)} />
}

/**
 * Send coordinates and image data to backend
 * @param {*} coords Geolocation coordinates
 * @param {*} dataUri dataUri photo
 */
async function onTakePhoto (coords, dataUri) {
  const options = {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      coordinates: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy
      },
      dataUri
    })
  }
  const response = await fetch(backend, options)
  const data = await response.json()
  console.log(data)
}

export default CameraContainer
