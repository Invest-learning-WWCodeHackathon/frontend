'use client'
import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Card,
    Container,
    Text,
    Flex,
    Heading,
    Spacer,
    useColorModeValue,
    Center,
    useToast
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Spinner } from 'react-bootstrap';

const StockCard = ({ symbol, name, price, dayHigh, dayLow }) => {
    const toast = useToast();
    const handleBuyStock = (symbol, name, price) => {
        const purchasedStock = {
            name,
            symbol,
            stocksowned: 1,
            Price: price,
        };
        const stockDataJSON = localStorage.getItem('stockData');
        const stockData = stockDataJSON ? JSON.parse(stockDataJSON) : [];
        let stockAlreadyExists = false;
        if (stockData) {
            stockAlreadyExists = stockData.some((stock) => stock.symbol === symbol);
        }

        if(stockAlreadyExists){
            toast({
                title: "Stock Exists",
                description: `You already own ${name}`,
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
        } else{
            const updatedStockData = [...stockData, purchasedStock];
            const updatedStockDataJSON = JSON.stringify(updatedStockData);
            localStorage.setItem('stockData', updatedStockDataJSON);
            toast({
                title: "Stock Added",
                description: `We have added ${name} stock to your account`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }
        
        // StockToast("Stock Added", `We have added ${name} stock to your account`);
    }
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.800')} p='3' m='6' borderRadius={12}>
            <Flex alignItems='center' >
                <Box p='2'>
                    <Heading size='md'>{symbol}</Heading>
                    <Text>{name}</Text>
                </Box>
                <Spacer />
                <Box p="2">${price}</Box>
                <Spacer />
                <ArrowUpIcon color={'green'} />
                <Box p="2" color={'green'}>${dayHigh}</Box>
                <Spacer />
                <ArrowDownIcon color={'red'} />
                <Box p="2" color={'red'}>${dayLow}</Box>
                <Spacer />
                <Button colorScheme='teal' onClick={() => handleBuyStock(symbol, name, price)}>Buy</Button>
            </Flex>
        </Box>
    )

}




export default function ExploreContent() {
    const [stocks, setStocks] = useState([]);
    const fetchAllStocks = async () => {
        const res = await fetch("http://127.0.0.1:5000/stock/list_all_tickers");
        const data = await res.json();
        setStocks(data);
    }
    useEffect(() => {
        fetchAllStocks();
        // console.log(stocks.length)
    }, []);
    return (
        <Box p={4}>
            {   
                (stocks?.length == 0) ?
                    <Center bg='' h='60vh' color='blue.500'>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                            zIndex={20}
                        />
                    </Center>
                    :
                    stocks?.map((stock) => (
                        <Container maxW={'3xl'} key={stock.ticker}>
                            <StockCard symbol={stock.ticker} name={stock.companyName} price={stock.price} dayHigh={stock.dayHigh} dayLow={stock.dayLow} />
                        </Container>
                    ))
            }

        </Box>
    )
}