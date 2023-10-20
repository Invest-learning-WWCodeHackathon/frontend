'use client';

import React, { useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiMenu,
} from 'react-icons/fi';
import DashboardHome from './DashboardHome'; // Replace with the actual path to DashboardHome component
import ExploreContent from './ExploreContent'; // Replace with the actual path to ExploreContent component

const NavItem = ({ icon, children, onSelect, ...rest }) => {
  return (
    <Box
      as="a"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={() => onSelect(children)}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      // height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color={'blue.400'}
      >
        Dashboard
      </Text>

    </Flex>
  );
};

const SidebarWithHeader = () => {
  const [LinkItems, setLinkItems] = useState([
    { name: 'Home', icon: FiHome, active: true },
    { name: 'Trending', icon: FiTrendingUp, active: false },
    { name: 'Explore', icon: FiCompass, active: false },
    { name: 'Favourites', icon: FiStar, active: false },
  ]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLink, setSelectedLink] = useState('Home');
  console.log(selectedLink);

  return (
    <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')}>
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="absolute"
        h="100vh"
        display={{ base: 'none', md: 'block' }}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={'blue.400'}>
            Dashboard
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={() => onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem bg={link.name === selectedLink ? 'blue.200' : ''} key={link.name} icon={link.icon} onSelect={() => setSelectedLink(link.name)}>
            {link.name}
          </NavItem>
        ))}
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="absolute"
            h="100vh"
          >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
              <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={'blue.400'}>
                Dashboard
              </Text>
              <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
              <NavItem key={link.name} icon={link.icon} onSelect={() => {
                setSelectedLink(link.name);
                onClose();
                }}>
                {link.name}
              </NavItem>
            ))}
          </Box>
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {selectedLink === 'Home' && <DashboardHome />}
        {selectedLink === 'Trending' && <ExploreContent />}
        {selectedLink === 'Explore' && <ExploreContent />}
        {selectedLink === 'Favourites' && <ExploreContent />}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
