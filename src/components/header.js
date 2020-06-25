import React, { useState, useRef } from "react";
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
          <Link to="/">SIMPLE AS F#*@</Link>
        </Heading>
        <Button 
          leftIcon={MdShoppingCart}
          variant="ghost"
          onClick={onOpen}
          ref={btnRef}
        >
          {cartCount}
        </Button>
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