import React from 'react'
import { Flex, Box } from '@chakra-ui/core'

const links = [
  {
    index: 0,
    link: "FAQ"
  },
  {
    index: 1,
    link: "Shipping"
  },
  {
    index: 2,
    link: "Contact"
  },
]

export default() => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      p="1rem"
      bg="#1F2933"
      borderRadius="0.25rem"
      ml={{ base: 4, md: 6, lg:8 }} 
      mr={{ base: 4, md: 6, lg:8 }}
      mb={{base:"20px", md:"40px"}}
      mt="50px"
    >
    {links.map(({index, link}) => (
      <Box 
        key={index}
        as="a" 
        href="#"
        color="rgba(255,255,255,0.92)"
        minW="2.5rem"
        fontSize="16px"
        pl="1rem"
        pr="1rem"
      >
        {link}
      </Box>
    ))}
    </Flex>
  )
}
