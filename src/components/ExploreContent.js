'use client'
import React, { useEffect, useRef, useState } from 'react';
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
    useToast,
    Spinner,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
    FormLabel,
    FormControl,
    Radio, RadioGroup,
    Stack,
    HStack
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { StockChart } from './StockChart';



const StockCard = ({ symbol, name, price, dayHigh, dayLow }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const [selectedOption, setSelectedOption] = useState('num');
    const [stockPrice, setStockPrice] = useState(price); // Replace XXX with the actual stock price
    const [amountToSpend, setAmountToSpend] = useState(0);
    const [numOfStocks, setNumOfStocks] = useState(0);

    const calculateNumOfStocks = () => {
        if (stockPrice > 0) {
            const stocksToBuy = amountToSpend / stockPrice;
            setNumOfStocks(stocksToBuy);
        } else {
            setNumOfStocks(0);
        }
    };

    useEffect(() => {
        calculateNumOfStocks();
    }, [amountToSpend, stockPrice]);
    // const handleBuyStock = (symbol, name, price) => {
    //     const purchasedStock = {
    //         name,
    //         symbol,
    //         stocksowned: 1,
    //         Price: price,
    //     };
    //     const stockDataJSON = localStorage.getItem('stockData');
    //     const stockData = stockDataJSON ? JSON.parse(stockDataJSON) : [];
    //     let stockAlreadyExists = false;
    //     if (stockData) {
    //         stockAlreadyExists = stockData.some((stock) => stock.symbol === symbol);
    //     }

    //     if (stockAlreadyExists) {
    //         toast({
    //             title: "Stock Exists",
    //             description: `You already own ${name}`,
    //             status: 'success',
    //             duration: 5000,
    //             isClosable: true,
    //         })
    //     } else {
    //         const updatedStockData = [...stockData, purchasedStock];
    //         const updatedStockDataJSON = JSON.stringify(updatedStockData);
    //         localStorage.setItem('stockData', updatedStockDataJSON);
    //         toast({
    //             title: "Stock Added",
    //             description: `We have added ${name} stock to your account`,
    //             status: 'success',
    //             duration: 5000,
    //             isClosable: true,
    //         })
    //     }

    //     // StockToast("Stock Added", `We have added ${name} stock to your account`);
    // }

    const handleBuyStock = () => {
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("handle submit called!",selectedAction, e.target.num.value);
        // console.log(e);
        setNumOfStocks(0);
        onClose();
    }
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.800')} p='3' m='6' borderRadius={12}>
            <Flex alignItems='center' >
                <Box p='2'>
                    <Heading color={'blue.500'} size='md'>{symbol}</Heading>
                    <Text>{name}</Text>
                    <Box p="">${price}</Box>

                </Box>
                <Spacer />
                <StockChart symbol={symbol} />
                <Spacer />
                <Button colorScheme='green' onClick={onOpen}>Buy</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{symbol}</ModalHeader>
                        <ModalCloseButton />
                        <form onSubmit={handleSubmit}>
                            <ModalBody>
                                <FormControl>
                                    <RadioGroup defaultValue='num' onChange={(value) => setSelectedOption(value)}>
                                        <HStack spacing={5}>
                                            <Radio value="num" defaultChecked>Number of Stocks</Radio>
                                            <Radio value="amt">Amount of Stocks</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </FormControl>
                                <br/>
                                {selectedOption === "num" && (
                                    <>
                                        <FormLabel>Number of Stocks</FormLabel>
                                        <NumberInput min={0} id="num">
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                        <br />
                                        {numOfStocks > 0 && (
                                            <Text fontSize="sm" color="gray.500">
                                                You can buy approximately {numOfStocks} stocks.
                                            </Text>
                                        )}
                                    </>
                                )}

                                {selectedOption === "amt" && (
                                    <>
                                        <FormLabel>Amount of Stocks</FormLabel>
                                        <NumberInput min={0} id="amt">
                                            <NumberInputField
                                                onChange={(e) => setAmountToSpend(parseFloat(e.target.value))}
                                            />
                                        </NumberInput>
                                    </>
                                )}
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={() => { setNumOfStocks(0); onClose(); }}>
                                    Close
                                </Button>
                                <Button colorScheme="green" type="submit">
                                    Buy
                                </Button>
                            </ModalFooter>
                        </form>

                    </ModalContent>
                </Modal>
                <Spacer />
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
                    stocks?.map((stock, index) => (
                        <Container maxW={'3xl'} key={stock.ticker}>
                            <StockCard symbol={stock.ticker} name={stock.companyName} price={stock.price} dayHigh={stock.dayHigh} dayLow={stock.dayLow} />
                        </Container>
                    ))
            }

        </Box>
    )
}