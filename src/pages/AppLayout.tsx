import React from 'react'
import ReactDOM from 'react-dom/client'
import { Box, ChakraProvider, defaultSystem, Flex } from '@chakra-ui/react'
import '../index.css'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import HomePage from './HomePage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem} >
      <Flex direction="column" minH="100vh" w="100%">
            <Header />
            <Box as="main" flex="1">
              <HomePage />
            </Box>
            <Footer />
          </Flex>
    </ChakraProvider>
  </React.StrictMode>,
)
