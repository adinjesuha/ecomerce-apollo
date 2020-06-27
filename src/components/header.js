import React, { useRef } from "react";
import { Link } from 'gatsby';
import { Box, Heading, Flex, Text, Button, useDisclosure } from "@chakra-ui/core";
import { MdShoppingCart } from 'react-icons/md';
import CartDrawer from "./cartDrawer";
import { useShoppingCart } from 'use-shopping-cart'

const links = [
  {name: 'Womens', path: "/categories/womens"},
  {name: 'Mens', path: "/categories/mens"},
  {name: 'Jackets', path: "/categories/jackets"},
  {name: 'Hats', path: "/categories/hats"},
  {name: 'Sneakers', path: "/categories/sneakers"},
]

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={{base: 2, md: 4}} display="block">
    {children}
  </Text>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { cartCount } = useShoppingCart()

  return (
    <Box
      as="nav"
      pt="20px"
      pl={{ base: 4, md: 6, lg:8 }} 
      pr={{ base: 4, md: 6, lg:8 }}
    >
      <Flex 
        align="center"
        justify="space-between"
        width="100%"
        borderBottom="1px solid"
        borderColor="gray.100"
        pb="10px"
        mb="10px"
      >
        <Heading as="h1" size="lg">
          <Link to="/">SIMPLE E-COMMERCE</Link>
        </Heading>
        <Box>
          <Box 
            as="a"
            href="https://github.com/adinjesuha/ecomerce-apollo"
            target="_blank" 
            rel="noopener"
            lineHeight="1.2"
          >View source
            <Box
              as="svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="link"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fontSize="18px"
              verticalAlign="middle"
              pl="5px"
              w="1.5em"
              mt="4px"
              display="inline-block"
            >
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </Box> 
          </Box>
          <Button 
            leftIcon={MdShoppingCart}
            variant="ghost"
            onClick={onOpen}
            ref={btnRef}
          >
            {cartCount}
          </Button>
        </Box>
      </Flex>

      <Flex>
      {links.map((link, i) => (
        <MenuItems key={`link.name-${i}`}><Link to={link.path}>{link.name}</Link></MenuItems>
      ))}
      </Flex>
      
      <CartDrawer 
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      />
    </Box>
  );
};

export default Header;