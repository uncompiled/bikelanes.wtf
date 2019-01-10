import React from "react"
import { toast } from "react-toastify"
import Camera, { FACING_MODES } from "react-html5-camera-photo"
import "react-html5-camera-photo/build/css/index.css"

import { backend } from "../../Config"
import { Loader } from "./Loader"

const CameraContainer = ({
  isGeolocationAvailable,
  isGeolocationEnabled,
  positionError,
  coords
}) => {
  return coords ? (
    <Camera
      onTakePhoto={dataUri => onTakePhoto(coords, dataUri)}
      idealFacingMode={FACING_MODES.ENVIRONMENT}
      isImageMirror={false}
    />
  ) : (
    <Loader />
  )
}

/**
 * Send coordinates and image data to backend
 * @param {*} coords Geolocation coordinates
 * @param {*} dataUri dataUri photo
 */
async function onTakePhoto (coords, dataUri) {
  const options = {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
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

  const toastOptions = { position: toast.POSITION.BOTTOM_CENTER }

  toast.info("Uploading image...", toastOptions)
  const response = await fetch(backend, options)
  if (response.status === 200) {
    toast.success("Submission successful!", toastOptions)
  } else {
    toast.error("Error: image could not be submitted.", toastOptions)
  }
}

export default CameraContainer
