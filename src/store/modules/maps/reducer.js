import { produce } from 'immer'

const INICIAL_STATE = {
  marker: []
}

export default function marker(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@marker/ADD_MARKER_REQUEST': {
        break
      }
      case '@marker/ADD_MARKER_SUCCESS': {
        draft.marker = action.payload

        break
      }
      case '@marker/ADD_MARKER_FAILURE': {
        break
      }
      default:
    }
  })
}
