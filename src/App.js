import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './components/GlobalStyles'
import theme from './theme'
import Header from './components/Header'
import Router from './router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Router />
      </main>
    </ThemeProvider>
  )
}

export default App
