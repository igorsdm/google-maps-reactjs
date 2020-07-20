import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { Marker, InfoWindow } from '@react-google-maps/api'

import GoogleMaps from '~/components/Maps'
import Button from '~/components/Button'
import {
  addMarkerRequest,
  deleteMarkersRequest
} from '~/store/modules/maps/actions'

import { Container, SideForm, Form, InputDiv } from './styles'

export default function Home() {
  const dispatch = useDispatch()
  const { totalMarkers } = useSelector(state => state.maps)
  const [selected, setSelected] = useState(null)

  const schema = Yup.object().shape({
    title: Yup.string().required('O Título é obrigatório'),
    lat: Yup.number()
      .min(-90)
      .max(90)
      .required('A Latitude é obrigatório'),
    lng: Yup.number()
      .min(-180)
      .max(180)
      .required('A Longitude é obrigatório')
  })
  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: schema
  })

  function handleSubmitMarker(data) {
    dispatch(addMarkerRequest(data))
    reset()
  }

  function handleDeleteMarkers() {
    dispatch(deleteMarkersRequest())
  }

  return (
    <Container>
      <SideForm>
        <Form
          onSubmit={handleSubmit(handleSubmitMarker)}
          autoComplete="off"
          data-testid="marker-form"
        >
          <h2>Adicionar Marcador</h2>
          <InputDiv>
            <label htmlFor="title">Título</label>
            <input type="text" name="title" id="title" ref={register()} />
            {errors.title && <span>O campo Título é obrigatório</span>}
          </InputDiv>
          <InputDiv>
            <label htmlFor="lat">Latitude</label>
            <input
              type="number"
              step="0.000001"
              name="lat"
              id="lat"
              ref={register}
            />
            {errors.lat && errors.lat.type === 'typeError' && (
              <span>O campo Latitude é obrigatório</span>
            )}
            {errors.lat && errors.lat.type === 'max' && (
              <span>A Latitude máxima é 90</span>
            )}
            {errors.lat && errors.lat.type === 'min' && (
              <span>A Latitude mínima é -90</span>
            )}
          </InputDiv>
          <InputDiv>
            <label htmlFor="lng">Longitude</label>
            <input
              type="number"
              step="0.000001"
              name="lng"
              id="lng"
              ref={register}
            />
            {errors.lng && errors.lng.type === 'typeError' && (
              <span>O campo Longitude é obrigatório</span>
            )}
            {errors.lng && errors.lng.type === 'max' && (
              <span>A Longitude máxima é 180</span>
            )}
            {errors.lng && errors.lng.type === 'min' && (
              <span>A Latitude mínima é -180</span>
            )}
          </InputDiv>
          <Button type="submit" width="80%" height="2.5rem">
            Adicionar
          </Button>
          <Button
            type="button"
            width="80%"
            height="2.5rem"
            color="sunset"
            onClick={() => handleDeleteMarkers()}
          >
            Limpar
          </Button>
        </Form>
      </SideForm>
      <GoogleMaps>
        {totalMarkers.map(marker => (
          <Marker
            key={marker.title}
            position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
            title={marker.title}
            onClick={() => {
              setSelected(marker)
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
            onCloseClick={() => {
              setSelected(null)
            }}
          >
            <div>
              <h2>{selected.title}</h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMaps>
    </Container>
  )
}
