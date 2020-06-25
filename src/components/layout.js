import React from 'react'
import { Box } from '@chakra-ui/core'

import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <Box 
        as="main"
        w="100%" 
        pl={{ base: 4, md: 6, lg:8 }} 
        pr={{ base: 4, md: 6, lg:8 }}
      >
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default Layout