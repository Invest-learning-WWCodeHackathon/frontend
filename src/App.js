import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import AppRouter from './components/AppRouter';

function App() {
  return (
    <ChakraProvider>
      <AppRouter/>
    </ChakraProvider>
  )
}

export default App;