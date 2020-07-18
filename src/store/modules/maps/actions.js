export function addMarkerRequest(payload) {
  return {
    type: '@marker/ADD_MARKER_REQUEST',
    payload
  }
}

export function addMarkerSuccess(payload) {
  return {
    type: '@marker/ADD_MARKER_SUCCESS',
    payload
  }
}

export function addMarkerFailure() {
  return {
    type: '@marker/ADD_MARKER_FAILURE'
  }
}
