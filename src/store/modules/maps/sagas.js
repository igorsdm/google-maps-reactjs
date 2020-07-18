import { takeLatest, put, all, select } from 'redux-saga/effects'

import { addMarkerSuccess, addMarkerFailure } from './actions'

export function* addMarker({ payload }) {
  const { marker } = yield select(state => state.maps)

  try {
    marker.push(payload)
    yield put(addMarkerSuccess(marker))
  } catch (error) {
    yield put(addMarkerFailure())
  }
}

export default all([takeLatest('@marker/ADD_MARKER_REQUEST', addMarker)])
