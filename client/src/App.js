import * as React from 'react'
import { ChakraProvider, Box, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import theme from './theme/theme';
import EventTitle from './components/EventTitle';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH={"100vh"} bgColor={'white'}>
        <Navbar/>
        <Box position={'absolute'} top={'50%'} transform={'translateY(-50%)'} w={'100%'}>
          <EventTitle />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
