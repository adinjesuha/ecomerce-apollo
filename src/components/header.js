import React, { useState, useRef } from "react";
import { Link } from 'gatsby';
import { Box, Heading, Flex, Text, Button, useDisclosure } from "@chakra-ui/core";
import { MdShoppingCart } from 'react-icons/md';
import CartDrawer from "./cartDrawer";

const links = [
  {name: 'Docs', path: "/docs"},
  {name: 'Examples', path: "/examples"},
  {name: 'Blog', path: "/blog"},
]

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p="0.8rem 2rem"
      bg="teal.500"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Link to="/">
            Chakra UI
          </Link>
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {links.map((link, i) => (
          <MenuItems key={`link.name-${i}`}><Link to={link.path}>{link.name}</Link></MenuItems>
        ))}
      </Box>
      
      <Button 
        rightIcon={MdShoppingCart}
        variant="ghost"
        color="white"
        onClick={onOpen}
        ref={btnRef}
      >
        Cart
      </Button>
      <CartDrawer 
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      />
    </Flex>
  );
};

export default Header;