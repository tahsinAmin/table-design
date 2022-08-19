import { Box, Button, Center, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack, Wrap } from "@chakra-ui/react";
import { AddIcon, CheckIcon, Icon } from "@chakra-ui/icons";
import { GrStackOverflow } from "react-icons/gr";
import { BsFillMicFill } from "react-icons/bs";
import { GiHeadphones } from "react-icons/gi";
import { TiHeadphones } from "react-icons/ti";
import { MdColorLens, MdTouchApp } from "react-icons/md";
import { FaBluetooth, FaHandHoldingHeart, FaHeadphones } from "react-icons/fa";
import { useState } from "react";
import CircleIcon from "../CircleIcon/CircleIcon";


const TableTry = () => {
    const [cnt, setCnt] = useState(0)
    const [data, setData] = useState([
        // {
        //     "name": <VStack><TiHeadphones size={"36px"} />
        //         <Text>H2</Text></VStack>,
        //     "wWB": false,
        //     "tI": true,
        //     "rM": true,
        //     "m": ["Event Fee Return + Cycling", "Apparel Insured"],
        //     "colors": ["blue.300", "pink.300", "gray.300"],
        //     "fit": "On-ear"
        // },
        {
            "name": <VStack><GiHeadphones size={"36px"} />
                <Text>H3 Anic</Text></VStack>,
            "wWB": false,
            "tI": false,
            "rM": true,
            "m": ["Stainless steel", "polymer", "rubber",],
            "colors": ["gray.300", "purple.300", "blue.300", "pink.300", "gray.300"],
            "fit": "Over-ear"
        },
        {
            "name": <VStack>
                <FaHeadphones size={"36px"} />
                <Text>H4 Ultra</Text></VStack>,
            "wWB": true,
            "tI": true,
            "rM": true,
            "m": ["Aluminimum", "polymer", "rubber",],
            "colors": ["gray.300", "red.300"],
            "fit": "On-ear"
        },
        {
            "name": <VStack><TiHeadphones size={"36px"} />
                <Text>H2</Text></VStack>,
            "wWB": false,
            "tI": true,
            "rM": true,
            "m": ["Leather", "fabric", "polymer", "rubber"],
            "colors": ["blue.300", "pink.300", "gray.300"],
            "fit": "In-ear"
        }
    ]);
    return (
        <Box>
            <Button leftIcon={<AddIcon />} colorScheme='teal' variant='solid' onClick={() => {
                setData([...data, data[cnt]])
                setCnt(cnt + 1)
            }}>
                Add to compare one more
            </Button>
            <TableContainer>
                <Table size='sm' variant='unstyled'>
                    <Thead>
                        <Tr>
                            <Th border={'none'}></Th>
                            <Th border={'none'}></Th>
                            {data.map((item) => <Th border={'none'}><Center>{item.name}</Center></Th>)}
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td border={'none'} as={Flex} justifyContent={'flex-end'}><FaBluetooth size={"16px"} /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}>
                                Wireless with bluetooth</Td>
                            {data.map((item) => <Td border='1px solid #fff' borderTop={0}
                                borderRight={0}><Center>{item.wWB && <CheckIcon />}</Center></Td>)}
                        </Tr>
                        <Tr>
                            <Td border={'none'} as={Flex} justifyContent={'flex-end'}><MdTouchApp /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}>Touch interface</Td>
                            {data.map((item) => <Td border='1px solid #fff' borderTop={0}
                                borderRight={0}><Center>{item.tI && <CheckIcon />}</Center></Td>)}
                        </Tr>

                        <Tr>
                            <Td border={'none'} as={Flex} justifyContent={'flex-end'}><BsFillMicFill /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}>Remote + Mic</Td>
                            {data.map((item) => <Td border='1px solid #fff' borderTop={0}
                                borderRight={0}><Center>{item.rM && <CheckIcon />}</Center></Td>)}
                        </Tr>

                        <Tr>
                            <Td border={'none'}><Box as={Flex} justifyContent={'flex-end'}
                                alignItems='center'><GrStackOverflow /></Box></Td>
                            <Td border='1px solid #fff' borderLeft={0} borderRight={0}
                                borderTop={0}>Materials</Td>
                            {data.map((item) => {
                                {/* return (
                                <Td border='1px solid #fff' borderRight={0}
                                    borderTop={0}>
                                    <Wrap w='50%'>
                                        {item.m.map((materialItem, index) => <Text align='center'>{materialItem}</Text>)}
                                    </Wrap></Td>
                            ) */}
                                return (
                                    <Td border='1px solid #fff' borderRight={0}
                                        borderTop={0}>
                                        <Box>
                                            {item.m.map((materialItem, index) => {
                                                if (index == item.m.length - 1) return <Text align='center'>{materialItem}</Text>
                                                else return <Text align='center'>{materialItem},</Text>
                                            })}
                                        </Box></Td>
                                )
                            }
                            )}
                        </Tr>
                        <Tr>
                            <Td border={'none'} as={Flex} justifyContent={'flex-end'}><MdColorLens /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}>Colours</Td>
                            {data.map((item) => {
                                return (<Td border='1px solid #fff' borderTop={0} borderRight={0}>
                                    <Flex justifyContent={'center'} gap={1}>
                                        {item.colors.map((colorItem) => <CircleIcon boxSize={5} color={colorItem} />)}
                                    </Flex>
                                </Td>)
                            })}
                        </Tr>
                        <Tr>
                            <Td border={'none'} as={Flex} justifyContent={'flex-end'}><FaHandHoldingHeart /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}
                                borderBottom={0}>Fit</Td>
                            {data.map((item) => <Td border='1px solid #fff' borderTop={0} borderRight={0}
                                borderBottom={0}><Center>{item.fit}</Center></Td>)}
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );

}

export default TableTry;

const data = [
    {
        "name": "H2",
        "wWB": false,
        "tI": true,
        "rM": true,
        "m": ["Leather", "fabric", "polymer", "rubber"],
        "colors": ["gray.300", "red.300", "blue.300", "pink.300", "gray.300"],
        "fit": "On-ear"
    },
    {
        "name": "H3 ANIC",
        "wWB": false,
        "tI": false,
        "rM": true,
        "m": ["Stainless steel", "polymer", "rubber",],
        "colors": ["gray.300", "red.300", "blue.300", "pink.300", "gray.300"],
        "fit": "Over-ear"
    },
    {
        "name": "H2",
        "wWB": true,
        "tI": true,
        "rM": true,
        "m": ["Aluminimum", "polymer", "rubber",],
        "colors": ["gray.300"],
        "fit": "On-ear"
    },
]