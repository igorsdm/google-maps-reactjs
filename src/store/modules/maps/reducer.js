import { produce } from 'immer'

const INICIAL_STATE = {
  totalMarkers: []
}

export default function maps(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@marker/ADD_MARKER_REQUEST': {
        break
      }
      case '@marker/ADD_MARKER_SUCCESS': {
        draft.totalMarkers = [...draft.totalMarkers, action.payload]
        break
      }
      case '@marker/ADD_MARKER_FAILURE': {
        break
      }
      case '@marker/DELETE_MARKERS_REQUEST': {
        break
      }
      case '@marker/DELETE_MARKERS_SUCCESS': {
        draft.totalMarkers = []
        break
      }
      case '@marker/DELETE_MARKERS_FAILURE': {
        break
      }
      default:
    }
  })
}
