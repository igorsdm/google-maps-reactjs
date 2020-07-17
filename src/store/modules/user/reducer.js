import { produce } from 'immer'

const INICIAL_STATE = {
  user: null,
  loading: false
}

export default function auth(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true
        break
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload
        draft.loading = false
        break
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false
        break
      }
      case '@auth/SIGN_OUT': {
        draft.user = null
        break
      }
      default:
    }
  })
}
