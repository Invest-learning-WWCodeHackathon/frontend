'use client'
import React from 'react';
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react';

import Pradnya from "../assests/Pradnya.jpg";

// Define an array of team members with their information
const teamMembers = [
  {
    id: 1,
    name: 'Elizabeth House',
    role: 'Designer',
    photo: 'jane-smith-photo.jpg',
  },
  {
    id: 2,
    name: 'Krystal Briggs',
    role: 'CEO',
    photo: 'john-doe-photo.jpg',
  },
  {
    id: 3,
    name: 'Pradnya Bhukan',
    role: 'Front-end developer',
    photo: Pradnya,
  },
  {
    id: 4,
    name: 'Sharmila Thippabhotla',
    role: 'Designer',
    photo: 'jane-smith-photo.jpg',
  }
];

export default function TeamMemberCards() {
  const cardBgColor = useColorModeValue('white', 'gray.900');
  return (
    <Flex flexWrap="wrap" gridGap={6} justify="center" mb={14} >
      {/* <Center py={12}  mb={14} > */}
      {teamMembers.map((member) => (
        <Box key={member.id} role={'group'} p={6} maxW={['90%', '230px']} w={'full'} bg={cardBgColor} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1} m={4}
        >
          <Box rounded={'lg'} mt={-12} pos={'relative'} height={'200px'} _after={{transition: 'all .3s ease',content: '""',w: 'full',h: 'full',pos: 'absolute',top: 5,left: 0,backgroundImage: `url(${member.photo})`,   filter: 'blur(15px)',   zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src={member.photo} alt={member.name} bg={'gray.200'}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {member.role}
            </Text>
            <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>
              {member.name}
            </Heading>
          </Stack>
        </Box>
      ))}
    {/* </Center> */}
    </Flex>
  );
}
