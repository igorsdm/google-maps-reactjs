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

export function deleteMarkersRequest() {
  return {
    type: '@marker/DELETE_MARKERS_REQUEST'
  }
}

export function deleteMarkersSuccess() {
  return {
    type: '@marker/DELETE_MARKERS_SUCCESS'
  }
}
export function deleteMarkersFailure() {
  return {
    type: '@marker/DELETE_MARKERS_FAILURE'
  }
}
