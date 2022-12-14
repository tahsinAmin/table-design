import { Box, Button, Center, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack, Wrap } from "@chakra-ui/react";
import { AddIcon, CheckIcon, Icon } from "@chakra-ui/icons";
import { GrStackOverflow } from "react-icons/gr";
import { BsFillMicFill } from "react-icons/bs";
import { GiHeadphones } from "react-icons/gi";
import { TiHeadphones } from "react-icons/ti";
import { MdColorLens, MdTouchApp } from "react-icons/md";
import { FaBluetooth, FaHandHoldingHeart, FaHeadphones } from "react-icons/fa";
import { useState, useEffect } from "react";
import CircleIcon from "../CircleIcon/CircleIcon";


const TableTry = () => {
    const [cnt, setCnt] = useState(0)
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([...data,
        {
            "name": <VStack><GiHeadphones size={"36px"} />
                <Text fontSize={'xl'}>H3 Anic</Text></VStack>,
            "wWB": false,
            "tI": false,
            "rM": true,
            "m": ["Stainless steel", "polymer", "rubber",],
            // "m": "Stainless steel polymer rubber",
            "colors": ["gray.300", "purple.300", "blue.300", "pink.300", "gray.300"],
            "fit": "Over-ear"
        },
        {
            "name": <VStack>
                <FaHeadphones size={"36px"} />
                <Text fontSize={'xl'}>H4 Ultra</Text></VStack>,
            "wWB": true,
            "tI": true,
            "rM": true,
            "m": ["Aluminimum", "polymer", "rubber",],
            // "m": "Aluminimum polymer rubber",
            "colors": ["gray.300", "red.300"],
            "fit": "On-ear"
        },
        {
            "name": <VStack><TiHeadphones size={"36px"} />
                <Text fontSize={'xl'}>H2</Text></VStack>,
            "wWB": false,
            "tI": true,
            "rM": true,
            "m": ["Leather", "fabric", "polymer", "rubber"],
            // "m": "Leather fabric polymer rubber",
            "colors": ["blue.300", "pink.300", "gray.300"],
            "fit": "In-ear"
        }
        ])
    }, [])

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
                            <Td border={'none'}></Td>
                            <Td border={'none'}></Td>
                            {data.map((item, index) => <Td key={index} border={'none'}><Center>{item.name}</Center></Td>)}
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td isNumeric w="20px"><FaBluetooth size={"16px"} /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}>
                                <Text fontSize={'xl'}>Wireless with bluetooth</Text></Td>
                            {data.map((item, index) => <Td key={index} border='1px solid #fff' borderTop={0}
                                borderRight={0}><Center>{item.wWB && <CheckIcon />}</Center></Td>)}
                        </Tr>
                        <Tr>
                            <Td border={'none'} isNumeric w="20px"><MdTouchApp /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}><Text fontSize={'xl'}>Touch interface</Text></Td>
                            {data.map((item, index) => <Td key={index} border='1px solid #fff' borderTop={0}
                                borderRight={0}><Center>{item.tI && <CheckIcon />}</Center></Td>)}
                        </Tr>

                        <Tr>
                            <Td border={'none'} isNumeric w="20px"><BsFillMicFill /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}><Text fontSize={'xl'}>Remote + Mic</Text>
                            </Td>
                            {data.map((item, index) => <Td key={index} border='1px solid #fff' borderTop={0}
                                borderRight={0}><Center>{item.rM && <CheckIcon />}</Center></Td>)}
                        </Tr>

                        <Tr>
                            <Td border={'none'} isNumeric w="20px"><Box ><GrStackOverflow /></Box></Td>
                            <Td border='1px solid #fff' borderLeft={0} borderRight={0}
                                borderTop={0}><Text fontSize={'xl'}>Materials</Text></Td>
                            {data.map((item, ind) => {
                                {/* return (
                                    <Td border='1px solid #fff' borderRight={0}
                                        borderTop={0}>
                                        <Wrap w={{ base: '100%', lg: '60%' }}>
                                            {item.m.split(' ').map((materialItem, index) => {
                                                if (index == item.m.length - 1) return <Text key={index} align='center' fontSize={'md'}>{materialItem}</Text>
                                                else return <Text key={index} align='center' fontSize={'md'}>{materialItem}</Text>
                                            })}
                                        </Wrap></Td>
                                ) */}
                                return (
                                    <Td key={ind} border='1px solid #fff' borderRight={0}
                                        borderTop={0}>
                                        <Box>
                                            {item.m.map((materialItem, index) => {
                                                if (index == item.m.length - 1) return <Text key={index} align='center'>{materialItem}</Text>
                                                else return <Text key={index} align='center'>{materialItem},</Text>
                                            })}
                                        </Box></Td>
                                )
                            }
                            )}
                        </Tr>
                        <Tr>
                            <Td border={'none'} isNumeric w="20px"><MdColorLens /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}><Text fontSize={'xl'}>Colours</Text></Td>
                            {data.map((item, index) => {
                                return (<Td key={index} border='1px solid #fff' borderTop={0} borderRight={0}>
                                    <Flex justifyContent={'center'} gap={1}>
                                        {item.colors.map((colorItem, index) => <CircleIcon key={index} boxSize={5} color={colorItem} />)}
                                    </Flex>
                                </Td>)
                            })}
                        </Tr>
                        <Tr>
                            <Td border={'none'} isNumeric w="20px"><FaHandHoldingHeart /></Td>
                            <Td border='1px solid #fff' borderTop={0} borderLeft={0} borderRight={0}
                                borderBottom={0}><Text fontSize={'xl'}>Fit</Text></Td>
                            {data.map((item, index) => <Td key={index} border='1px solid #fff' borderTop={0} borderRight={0}
                                borderBottom={0}><Center>{item.fit}</Center></Td>)}
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );

}

export default TableTry;