import React from 'react'

import GoogleMaps from '~/components/Maps'
import { Container } from './styles'
import { useDispatch } from 'react-redux'

import { addMarkerRequest } from '~/store/modules/maps/actions'

export default function Home() {
  const dispatch = useDispatch()

  function handleSubmitMarker(data) {
    dispatch(addMarkerRequest(data))
  }

  return (
    <Container>
      <GoogleMaps />
    </Container>
  )
}
