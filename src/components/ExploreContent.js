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
import useCurrentUser from '../hooks/useCurrectUser';



const StockCard = ({ symbol, name, price }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username, id } = useCurrentUser();
  const toast = useToast();

  const [selectedOption, setSelectedOption] = useState('num');
  const [stockPrice, setStockPrice] = useState(price); // Replace XXX with the actual stock price
  const [amountToSpend, setAmountToSpend] = useState(0);
  const [numOfStocks, setNumOfStocks] = useState(0);

  const handleNumOfStocks = (value) => {
    setNumOfStocks(value);
    setAmountToSpend(numOfStocks * price);
  };
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getUserData = await fetch(`https://youth-invest-backend-sharmilathippab.replit.app/db/get_by_id?user_id=${id}`);
    const userData = await getUserData.json();
    const accountBalance = userData.data[0].points;
    console.log(accountBalance, amountToSpend, numOfStocks);
    const newAccountBalance = accountBalance - amountToSpend;
    await fetch(`https://youth-invest-backend-sharmilathippab.replit.app/stock/buy_stocks?ticker=${symbol}&quantity=${numOfStocks}&buying_price=${price}&current_points=${newAccountBalance}&user_id=${id}`)
    setNumOfStocks(0);
    setAmountToSpend(0);
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
                <br />
                {selectedOption === "num" && (
                  <>
                    <FormLabel>Number of Stocks</FormLabel>
                    <NumberInput min={0} id="num" value={numOfStocks} onChange={handleNumOfStocks}
                    // {(e) =>{
                    //     console.log(e);
                    //     console.log(value);
                    //     setNumOfStocks(e);
                    // } }
                    >
                      <NumberInputField />
                      <NumberInputStepper >
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <br />

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
                {/* {selectedOption === "num" && (
                                    <Text fontSize="sm" color="gray.500">
                                        You can buy approximately {numOfStocks} stocks.
                                    </Text>
                                )} */}
                {selectedOption === "amt" && (
                  <Text fontSize="sm" color="gray.500">
                    You can buy approximately {numOfStocks} stocks with ${amountToSpend}.
                  </Text>
                )}
                <Button colorScheme="blue" mr={3} onClick={() => { setNumOfStocks(0); setAmountToSpend(0); onClose(); }}>
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
  const listOfTickers = ["AAPL", "MSFT", "GOOGL", "TSLA", "AMZN", "META"
    // , "NVDA", "JPM", "JNJ", "V", "PG", "GE", "BABA", "KO", "NFLX", "BA", "DIS"
  ];
  const [stocks, setStocks] = useState([]);
  const getAllStocks = async () => {
    const stockData = [];

    for (const stock of listOfTickers) {
      const res = await fetch(`https://youth-invest-backend-sharmilathippab.replit.app/stock/trend?ticker=${stock}`);
      const data = await res.json();

      const lastItem = data[data.length - 1];
      lastItem.symbol = stock;
      stockData.push(lastItem);
    }

    setStocks(stockData);
  };

  useEffect(() => {
    getAllStocks();
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
            <Container maxW={'3xl'} key={stock.Name}>
              <StockCard symbol={stock.symbol} name={stock.Name} price={stock.CurrentPrice} />
            </Container>
          ))
      }

    </Box>
  )
}