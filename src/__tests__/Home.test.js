import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { render, fireEvent } from '~/test.utils'
import Home from '~/pages/Home'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

const mockUseSelector = useSelector
const mockUseDispatch = useDispatch
const mockDispatch = jest.fn()

describe('Google Maps Marker', () => {
  it('should be able to add a new marker', () => {
    mockUseSelector.mockImplementation(cb => cb({ maps: [] }))
    mockUseDispatch.mockImplementation(() => mockDispatch)

    const { getByTestId, getByLabelText } = render(<Home />)

    fireEvent.change(getByLabelText('Título'), {
      target: { value: 'Porto Alegre' }
    })
    fireEvent.change(getByLabelText('Latitude'), {
      target: { value: -30.034647 }
    })
    fireEvent.change(getByLabelText('Longitude'), {
      target: { value: -51.217659 }
    })

    fireEvent.submit(getByTestId('marker-form'))

    expect(mockUseDispatch).toHaveBeenCalled()
  })
})
