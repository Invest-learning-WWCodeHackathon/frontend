'use client'
import React from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    HStack,
    Text,
    Flex,
    Heading,
    Spacer,
    ButtonGroup,
    useColorModeValue
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

const StockCard = ({ symbol, name, price, dayHigh, dayLow }) => {
    const handleBuyStock = () =>{
    }
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.800')} p='3' m='6' borderRadius={12}>
            <Flex  alignItems='center' >
                <Box p='2'>
                    <Heading size='md'>{symbol}</Heading>
                    <Text>{name}</Text>
                </Box>
                <Spacer />
                <Box p="2">${price}</Box>
                <Spacer />
                <ArrowUpIcon color={'green'}/>
                <Box p="2" color={'green'}>${dayHigh}</Box>
                <Spacer />
                <ArrowDownIcon color={'red'}/>
                <Box p="2" color={'red'}>${dayLow}</Box>
                <Spacer />
                <Button colorScheme='teal' onClick={()=>handleBuyStock()}>Buy</Button>
            </Flex>
        </Box>
    )

}




export default function ExploreContent() {
    return (
        <Box p={4}>
            <Container maxW={'3xl'}>
                <StockCard symbol="AAPL" name="Apple Inc." price="24" dayHigh="177.57" dayLow="175.11" />
                <StockCard symbol="AAPL" name="Apple Inc." price="24" dayHigh="177.57" dayLow="175.11" />
                <StockCard symbol="AAPL" name="Apple Inc." price="24" dayHigh="177.57" dayLow="175.11" />
                <StockCard symbol="AAPL" name="Apple Inc." price="24" dayHigh="177.57" dayLow="175.11" />
            </Container>
        </Box>
    )
}