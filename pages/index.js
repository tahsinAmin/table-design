import {
    Table,
    Thead,
    Tbody,
    Text,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Center, Flex, Box, VStack, Select
} from '@chakra-ui/react'

import TableTry from "../components/TableTry/TableTry";
import { CalendarIcon, CheckIcon } from "@chakra-ui/icons";
import React from "react";

export default function Home() {
    return (
        <Box bg={'#a2a2a2'} color={'#fff'} height='100vh'>
            <Text fontSize='5xl'>COMPARE HEADPHONES</Text>
            <TableTry />
        </Box>
    );
}
