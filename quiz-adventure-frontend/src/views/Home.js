import React from "react"
import {
  Box,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react'

import QuizCardsDisplayer from "../components/QuizCardsDisplayer"

class Home extends React.Component {
  render () {
    return (
      <>
        <main className="wave-background">
          <Container maxW={'4xl'}>
            <Stack
              as={Box}
              textAlign={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20 }}
              mb={400}>
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
            <Stack spacing={20}>
              <Text fontSize="4xl">Quizzes populaires</Text>
              <QuizCardsDisplayer></QuizCardsDisplayer>
            </Stack>
          </Container>
        </main>
      </>
    )
  }
}

export default Home