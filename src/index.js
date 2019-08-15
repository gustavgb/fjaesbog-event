import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'normalize.css'
import theme from './theme'
import App from './Components/App'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Helvetica;
  }
`

ReactDOM.render(
  <div>
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <App />
      </div>
    </ThemeProvider>
  </div>,
  document.getElementById('root')
)
