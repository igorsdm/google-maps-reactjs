import React from 'react'
import { act } from 'react-dom/test-utils'
import { useSelector, useDispatch } from 'react-redux'
import { render, fireEvent } from '~/test.utils'
import Home from '~/pages/Home'

jest.mock('react-redux')

const dispatch = jest.fn()

describe('Google Maps Marker', () => {
  it('should be able to add a new marker', async () => {
    useDispatch.mockReturnValue(dispatch)
    useSelector.mockImplementation(cb =>
      cb({
        maps: { totalMarkers: [] }
      })
    )

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

    await act(async () => {
      fireEvent.submit(getByTestId('marker-form'))
    })

    expect(dispatch).toHaveBeenCalled()
  })
})
