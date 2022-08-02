import React, { Component } from 'react';
import { Box, Center, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

const TableTry = () => {

    return (
        <TableContainer bg='gray.600' color='#fff' h={'30vh'}>
            <Table size='sm' variant='unstyled'>
                <Thead>
                    <Tr>
                        <Th border={'none'}></Th>
                        <Th border={'none'}></Th>
                        <Th border={'none'}><Center><VStack><CalendarIcon boxSize={8} />
                            <Text>H2</Text></VStack></Center></Th>
                        <Th border={'none'}><Center><VStack><CalendarIcon boxSize={8} />
                            <Text>H3 Anic</Text></VStack></Center></Th>
                        <Th border={'none'}><Center><VStack><CalendarIcon boxSize={8} />
                            <Text>H4 Ultra</Text></VStack></Center></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td border={'none'} as={Flex} justifyContent={'flex-end'}><CalendarIcon /></Td>
                        <Td border='1px solid #fff' borderTop={0} borderLeft={0}>Wireless with bluetooth</Td>
                        <Td border='1px solid #fff' borderTop={0} borderRight={0}></Td>
                        <Td border='1px solid #fff' borderTop={0} borderRight={0}></Td>
                        <Td borderRadius='10px' border='1px solid #fff' borderTop={0} borderRight={0}
                        ><Center><CheckIcon /></Center></Td>
                    </Tr>
                    <Tr>
                        <Td border={'none'} as={Flex} justifyContent={'flex-end'}><CalendarIcon /></Td>
                        <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}>feet</Td>
                        <Td border='1px solid #fff' borderTop={0} borderRight={0}><Center><CheckIcon /></Center></Td>
                        <Td border='1px solid #fff' borderTop={0} borderRight={0}></Td>
                        <Td borderRadius='10px' border='1px solid #fff' borderTop={0} borderRight={0}
                        ><Center><CheckIcon /></Center></Td>
                    </Tr>
                    <Tr>
                        <Td border={'none'} as={Flex} justifyContent={'flex-end'}><CalendarIcon /></Td>
                        <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}
                            borderBottom={0}>yards</Td>
                        <Td border='1px solid #fff' borderTop={0} borderRight={0} borderBottom={0}><Center><CheckIcon /></Center></Td>
                        <Td borderRadius='10px' border='1px solid #fff' borderTop={0} borderRight={0}
                            borderBottom={0}
                        ><Center><CheckIcon /></Center></Td>
                        <Td borderRadius='10px' border='1px solid #fff' borderTop={0} borderRight={0}
                            borderBottom={0}
                        ><Center><CheckIcon /></Center></Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );

}

export default TableTry;