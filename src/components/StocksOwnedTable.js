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
    useColorModeValue
} from '@chakra-ui/react';

const stockData = [
    { name: 'Apple', stocksowned: '2', Price: 232.4 },
    { name: 'Microsoft', stocksowned: '1', Price: 320.48 },
    { name: 'Oracle', stocksowned: '5', Price: 423.4 },
];

export default function StocksOwnedTable() {
    return (
        <Box p={4}>
            <Container maxW={'5xl'} mt={6}>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead bg={useColorModeValue('blue.200', 'blue.600')}>
                            <Tr>
                                <Th color={useColorModeValue('gray.600', 'white')} >Name</Th>
                                <Th color={useColorModeValue('gray.600', 'white')} isNumeric>Stocks Owned</Th>
                                <Th color={useColorModeValue('gray.600', 'white')} isNumeric>Price</Th>
                                <Th color={useColorModeValue('gray.600', 'white')} isNumeric>Your Share</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {stockData.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.name}</Td>
                                    <Td isNumeric>{item.stocksowned}</Td>
                                    <Td isNumeric>{item.Price}</Td>
                                    <Td isNumeric>{item.Price * item.stocksowned}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}
