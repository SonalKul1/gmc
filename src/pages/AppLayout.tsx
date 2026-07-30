import React from 'react'
import ReactDOM from 'react-dom/client'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../index.css'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import HomePage from './HomePage.tsx'
import TeamPage from './TeamPage.tsx'
import ProductPage from './ProductPage.tsx'
import CataloguePage from './CataloguePage.tsx'
import RepairPage from './RepairPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Flex direction="column" minH="100vh" w="100%">
          <Header />
          <Box as="main" flex="1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/catalogue" element={<CataloguePage />} />
              <Route path="/repair" element={<RepairPage />} />
              <Route path="/team" element={<TeamPage />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
