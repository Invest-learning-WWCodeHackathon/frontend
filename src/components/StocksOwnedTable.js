import React from 'react';
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
    Heading,
    Text,
    CSSReset,
    Stack,
    Link,
    Button,
    ButtonGroup
  } from "@chakra-ui/react";

const stockData = [
    { name: 'Apple', symbol:'AAPL', stocksowned: '2', Price: 232.4 },
    { name: 'Microsoft', symbol:'MSFT', stocksowned: '1', Price: 320.48 },
    { name: 'Oracle', symbol:'ORCL', stocksowned: '5', Price: 423.4 },
];

export default function StocksOwnedTable() {
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
    return (
        <Box p={4}>
            <Container maxW={'5xl'} mt={6}>
                {
                    (stockData.length === 0 ) ? noStocks : 
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
                                        <ButtonGroup variant='outline' spacing='2'>
                                            <Button colorScheme='green'>Buy</Button>
                                            <Button colorScheme='red'>Trade</Button>
                                        </ButtonGroup>
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
