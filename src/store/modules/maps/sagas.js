import { takeLatest, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { addMarkerSuccess, addMarkerFailure } from './actions'

export function* addMarker({ payload }) {
  try {
    yield put(addMarkerSuccess(payload))
    toast.success('Marcador registrado com sucesso!')
  } catch (error) {
    yield addMarkerFailure()
  }
}

export default all([takeLatest('@marker/ADD_MARKER_REQUEST', addMarker)])
