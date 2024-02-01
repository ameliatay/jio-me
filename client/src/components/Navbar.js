import { Box, HStack, Text } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <Box w={'100vw'} py={5} borderBottom={'1px solid lightgray'}>
            <HStack justifyContent={'space-between'}>
                <Text fontWeight={800} fontSize={'24px'} mx={12}>
                    let's go
                </Text>
                <Text  fontWeight={400} fontSize={'16px'} mx={12}>
                    Support
                </Text>
            </HStack>
        </Box>
    )
}

export default Navbar