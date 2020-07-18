import { all } from 'redux-saga/effects'

import maps from './maps/sagas'

export default function* rootSaga() {
  return yield all([maps])
}
