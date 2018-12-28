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
  const response = await fetch(backend, options)
  const data = await response.json()
  if (response.status === 200) {
    toast.success("Submission successful!", {
      position: toast.POSITION.BOTTOM_CENTER
    })
    console.log(data)
  } else {
    toast.error("Error: image could not be submitted.", {
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
}

export default CameraContainer
