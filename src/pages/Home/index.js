import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import GoogleMaps from '~/components/Maps'
import { addMarkerRequest } from '~/store/modules/maps/actions'
import Button from '~/components/Button'

import { Container, SideForm, Form, InputDiv } from './styles'

export default function Home() {
  const dispatch = useDispatch()
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

  return (
    <Container>
      <SideForm>
        <Form onSubmit={handleSubmit(handleSubmitMarker)} autoComplete="off">
          <h2>Adicionar Marcador</h2>
          <InputDiv>
            <label htmlFor="Title">Titulo</label>
            <input type="text" name="title" ref={register()} />
            {errors.title && <span>O campo Título é obrigatório</span>}
            {console.log(errors)}
          </InputDiv>
          <InputDiv>
            <label htmlFor="lat">Latitude</label>
            <input type="number" name="lat" ref={register} />
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
            <input type="number" name="lng" ref={register} />
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
          <Button
            type="submit"
            backgroundColor="ruby"
            width="80%"
            height="2.5rem"
          >
            Adicionar
          </Button>
        </Form>
      </SideForm>
      <GoogleMaps />
    </Container>
  )
}
