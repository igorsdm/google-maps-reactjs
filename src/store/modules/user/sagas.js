import { takeLatest, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { signInSuccess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    yield put(signInSuccess(payload))
  } catch (error) {
    toast.error('Something went wrong, please try again latter!')
    yield put(signFailure())
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
