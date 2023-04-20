import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  Spacer,
  useTheme,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import LoginNav from './LoginNav';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const links = [
    { href: '/', text: 'Home' },
    { href: '/courses', text: 'Courses' },
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg={theme.colors.brand[500]}
      color="white"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Sample Corp
        </Text>
      </Box>
      <Spacer />
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            marginRight="1rem"
            _hover={{ color: theme.colors.accent[300] }}
          >
            {link.text}
          </Link>
        ))}
      </Box>
      <Spacer />
      <Box display={{ base: 'none', md: 'block' }}>
        <LoginNav isLoggedIn={isLoggedIn} onToggleLogin={handleLoginLogout} />
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent
            bg={theme.colors.brand[500]}
          >
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <LoginNav isLoggedIn={isLoggedIn} onToggleLogin={handleLoginLogout} />
              <VStack>
                {links.map((link, index) => (
                  <Link
                    bg={theme.colors.brand[500]}
                    key={index}
                    href={link.href}
                    _hover={{ color: theme.colors.accent[300] }}
                    onClick={onClose}
                  >
                    {link.text}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;
