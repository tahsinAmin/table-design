import {
    Text,
    Box,
} from '@chakra-ui/react'

import TableTry from "../components/TableTry/TableTry";

export default function Home() {
    return (
        <Box bg={'#a2a2a2'} color={'#fff'} height='100vh' p={10}>
            <Text fontSize='5xl'>COMPARE HEADPHONES</Text>
            <TableTry />
        </Box>
    );
}
