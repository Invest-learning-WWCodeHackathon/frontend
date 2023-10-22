import React, { useState } from 'react';
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

export default function StocksOwnedTable() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [stockData, setStockData] = useState(JSON.parse(localStorage.getItem('stockData')) || []);
    const [selectedAction, setSelectedAction] = useState('');
    localStorage.setItem('stockData', JSON.stringify(stockData));

    const [numberOfStocks, setnumberOfStocks] = useState(0);
    const handleNumberChange = (e) => {
        if (e && e.target) {
            const newValue = e.target.value;
            setnumberOfStocks(newValue);
          }
      };
    const handle = (action) => {
        setSelectedAction(action);
        onOpen();
      };

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
    const tableHeaderColor = useColorModeValue('gray.600', 'white');
    const tableHeaderBg = useColorModeValue('gray.300', 'gray.600');
    const handleTrade = (symbol, number) => {
        console.log(number)
    }

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
                                            <Td>{item.name} ( {item.symbol} )</Td>
                                            <Td isNumeric>{item.stocksowned}</Td>
                                            <Td isNumeric>${item.Price}</Td>
                                            <Td isNumeric>${item.Price * item.stocksowned}</Td>
                                            <Td>
                                                <ButtonGroup variant='outline' spacing='2' >
                                                    <Button colorScheme='green' onClick={() => handle('Buy')} >Buy</Button>
                                                    <Button colorScheme='red' onClick={() => handle('Trade')} >Trade</Button>
                                                </ButtonGroup>
                                                    <Modal isOpen={isOpen} onClose={onClose}>
                                                        <ModalOverlay />
                                                        <ModalContent>
                                                            <ModalHeader>{item.symbol}</ModalHeader>
                                                            <ModalCloseButton />
                                                            <ModalBody>
                                                            <FormControl>
                                                                <FormLabel>Number of Stocks</FormLabel>
                                                                <NumberInput min={0} value={numberOfStocks} onChange={handleNumberChange}>
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
                                                                        <Button colorScheme='green' onClick={() => { handleTrade(item.symbol, numberOfStocks) }}>Buy</Button>
                                                                        :
                                                                        <Button colorScheme='red' onClick={() => { handleTrade(item.symbol, numberOfStocks) }}>Sell</Button>

                                                                }
                                                            </ModalFooter>
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
