import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Table,
  Th,
  Tr,
  Td,
  Thead,
  Tbody,
  TableContainer,
  useColorModeValue,
  ChakraProvider,
  Text,
  CSSReset,
  Stack,
  Button,
  ButtonGroup,
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
  FormControl
} from "@chakra-ui/react";
import useCurrentUser from '../hooks/useCurrectUser';

export default function StocksOwnedTable() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username, id } = useCurrentUser();
  const [stockData, setStockData] = useState(JSON.parse(localStorage.getItem('stockData')) || []);
  const [selectedAction, setSelectedAction] = useState(''); // buy or sell
  const tableHeaderColor = useColorModeValue('gray.600', 'white');
  const tableHeaderBg = useColorModeValue('gray.300', 'gray.600');

  localStorage.setItem('stockData', JSON.stringify(stockData));
  const fetchUserStockData = async () => {
    const userData = await fetch(`https://youth-invest-backend-sharmilathippab.replit.app/stock/get_user_stock_portfolio?user_id=${id}`);
    const data = await userData.json();
    console.log(data[1]);
    setStockData(data[1]);
  }

  useEffect(() => {
    fetchUserStockData();
  }, [])

  const handle = (action) => {  //handle buy or sell clicked
    setSelectedAction(action);
    onOpen();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit called!", selectedAction, e.target.num.value);
    console.log(e);
    onClose();
  }

  const noStocks =
    <>
      <ChakraProvider>
        <CSSReset />
        <Box p={3} m={5} pt={5} height={'60vh'}>
          <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
            <Text p={5} m={5} color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
              You have no stocks yet!
            </Text>
          </Stack>
        </Box>
      </ChakraProvider>
      <br /><br />
    </>
  return (
    <Box p={4}>
      <Container maxW={'5xl'} mt={6}>
        {
          (stockData.length === 0) ? noStocks :
            <TableContainer>
              <Table variant='simple'>
                <Thead bg={tableHeaderBg}>
                  <Tr>
                    <Th color={tableHeaderColor} >Name</Th>
                    <Th color={tableHeaderColor} isNumeric>Shares</Th>
                    <Th color={tableHeaderColor} isNumeric>Price</Th>
                    <Th color={tableHeaderColor} isNumeric>Equity</Th>
                    <Th color={tableHeaderColor} isNumeric></Th>

                  </Tr>
                </Thead>
                <Tbody>
                  {stockData.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.ticker} ( {item.ticker} )</Td>
                      <Td isNumeric>{item.quantity}</Td>
                      <Td isNumeric>${item.Price}</Td>
                      <Td isNumeric>${item.equity}</Td>
                      <Td>
                        <ButtonGroup variant='outline' spacing='2' >
                          <Button colorScheme='green' onClick={() => handle('Buy')} >Buy</Button>
                          <Button colorScheme='red' onClick={() => handle('Trade')} >Sell</Button>
                        </ButtonGroup>
                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>{item.symbol}</ModalHeader>
                            <ModalCloseButton />
                            <form onSubmit={handleSubmit}>

                              <ModalBody>
                                <FormControl >
                                  <FormLabel>Number of Stocks</FormLabel>
                                  <NumberInput min={0} id="num" >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                      <NumberIncrementStepper />
                                      <NumberDecrementStepper />
                                    </NumberInputStepper>
                                  </NumberInput>
                                </FormControl>
                              </ModalBody>

                              <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}> Close </Button>
                                {
                                  (selectedAction === 'Buy') ?
                                    <Button colorScheme='green' type='submit'>Buy</Button>
                                    :
                                    <Button colorScheme='red' type='submit'>Sell</Button>
                                }
                              </ModalFooter>
                            </form>
                          </ModalContent>
                        </Modal>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
        }

      </Container>
    </Box>
  );
}
