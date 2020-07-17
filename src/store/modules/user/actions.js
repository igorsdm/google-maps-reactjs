export function signInRequest(payload) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload
  }
}

export function signInSuccess(payload) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE'
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  }
}
