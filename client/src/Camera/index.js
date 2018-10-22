import React from "react"
import Camera from "react-html5-camera-photo"
import "react-html5-camera-photo/build/css/index.css"

const CameraContainer = ({ coords }) => {
  return <Camera onTakePhoto={dataUri => onTakePhoto(coords, dataUri)} />
}

/**
 * Send coordinates and image data to backend
 * @param {*} coords Geolocation coordinates
 * @param {*} dataUri dataUri photo
 */
function onTakePhoto (coords, dataUri) {
  // TODO: Actually send the data to the backend
  console.log(coords, dataUri)
}

export default CameraContainer
