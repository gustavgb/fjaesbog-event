import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'normalize.css'
import theme from './theme'
import App from './Components/App'
import content from './content'

window.addEventListener('load', () => {
  document.title = content.documentTitle
})

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Helvetica;
  }

  body {
    background-color: #e9ebee;
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
