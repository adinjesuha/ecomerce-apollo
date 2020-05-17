import React from 'react'
import { Heading, Box } from '@chakra-ui/core'

const HeadLine = ({textLine}) => (
  <Box
    mt={70}
    mb={70}
  >
    <Heading
      as="h1" 
      size="xl" 
      textAlign="center"
      textTransform="uppercase"
      mb={3}
    >
      {textLine}
    </Heading>
    <Box 
      w="40px"
      h="3px"
      margin="0 auto"
      bg="black" 
    />
  </Box>
)

export default HeadLine