import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default function GoogleMaps({ children }) {
  const [center, setCenter] = useState({})
  const [zoom, setZoom] = useState(10)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        setCenter({
          lat: Number(position.coords.latitude),
          lng: Number(position.coords.longitude)
        })
      },
      function(error) {
        if (error.code === error.PERMISSION_DENIED) {
          setCenter({
            lat: Number(-14.235004),
            lng: Number(-51.925282)
          })
          setZoom(4)
        }
      }
    )
  }, [])

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={zoom}
          center={center}
        >
          {children}
        </GoogleMap>
      ) : (
        <h1>Carregando Mapa</h1>
      )}
    </Container>
  )
}
GoogleMaps.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}
