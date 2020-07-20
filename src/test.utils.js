import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import globalTheme from '~/styles/colors'

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

AllTheProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}
