import { takeLatest, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import {
  addMarkerSuccess,
  addMarkerFailure,
  deleteMarkersSuccess,
  deleteMarkersRequest
} from './actions'

export function* addMarker({ payload }) {
  try {
    yield put(addMarkerSuccess(payload))
    toast.success('Marcador registrado com sucesso!')
  } catch (error) {
    yield put(addMarkerFailure())
  }
}
export function* deleteMarkers() {
  try {
    yield put(deleteMarkersSuccess())
    toast.success('Marcadores deletados com sucesso!')
  } catch (error) {
    yield put(deleteMarkersRequest())
  }
}

export default all([
  takeLatest('@marker/ADD_MARKER_REQUEST', addMarker),
  takeLatest('@marker/DELETE_MARKERS_REQUEST', deleteMarkers)
])
