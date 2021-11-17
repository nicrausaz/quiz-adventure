import React from "react"
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

class Home extends React.Component {
  render () {
    return (
      <>
        <main>
          <Container maxW={'4xl'}>
            <Stack
              as={Box}
              textAlign={'center'}
              spacing={{ base: 8, md: 20 }}
              py={{ base: 20 }}>
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="8xl"
                fontWeight="extrabold"
              >
                Quiz Adventure
              </Text>

              <Text fontSize="2xl">
                Testez vos connaissances dans divers thèmes !
              </Text>
            </Stack>
          </Container>
        </main>
      </>
    )
  }
}

export default Home