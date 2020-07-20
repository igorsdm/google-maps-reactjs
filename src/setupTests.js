import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
}

global.navigator.geolocation = mockGeolocation
