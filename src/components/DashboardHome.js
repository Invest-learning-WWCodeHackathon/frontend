'use client'

import {
    Box,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Icon,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    FcBullish,
    FcCurrencyExchange
} from 'react-icons/fc'
import StocksOwnedTable from './StocksOwnedTable'

const Card = ({ heading, icon, amount }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '300px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={useColorModeValue('gray.400', 'gray.600')}
            overflow="hidden"
            p={2}>
            <HStack align={'center'} spacing={7}>
                <Flex
                    w={5}
                    h={12}
                    m={5}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}>
                   
                    {icon}
                </Flex>
                <Box m={2} justify={'end'} align={'end'}>
                    <Heading size="md">{heading}</Heading>
                    <Text color={useColorModeValue('gray.700', 'gray.400')} fontSize={{ base: 'sm', sm: 'lg' }}>
                        {amount}
                    </Text>
                </Box>

            </HStack>
        </Box>
    )
}

export default function DashboardHome() {
    return (
        <Box p={4}>

            <Container maxW={'5xl'} mt={2}>
                <Flex flexWrap="wrap" gridGap={6} justify="center" mb={14}>
                    <Card
                        heading={'Account Balance'}
                        icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
                        amount={'$1000'}
                    />
                    <Card
                        heading={'Stock Balance'}
                        icon={<Icon as={FcBullish} w={10} h={10} />}
                        amount={'$0'}
                    />

                </Flex>
                <Divider borderColor={useColorModeValue('gray.700', 'gray.400')} />
                <StocksOwnedTable />
            </Container>
        </Box>
    )
}