import React from 'react'
import { AppProps } from 'next/app'
import { TodoProvider } from '../contexts/TodoContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  )
}

export default MyApp