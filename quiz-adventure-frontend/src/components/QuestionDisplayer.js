import { Box, Stack, Text, Center, Grid } from "@chakra-ui/layout"
import { Flex, Spacer } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import AnswerBox from "./Answerbox"

const QuestionDisplayer = ({ title, number, image, question }) => {
   return (
      <Stack
         spacing={{ md: 0 }}
         py={{ base: 10 }}>
         <Flex bg="#eeeeee">
            <Box p="4">
               {title}
            </Box>
            <Spacer />
            <Box p="4">
               {number} / 10
            </Box>
         </Flex>

         <Center>
            <Box borderRadius="lg" overflow="hidden">
               <Image src={image} p={100} />
               <Center bg="#eeeeee">
                  <Text>{question}</Text>
               </Center>

               <Box p="6">
                  <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                     {/* {answers.map(answer => {
                        <AnswerBox title={answer.option} isGood={answer.isTheAnswer} />
                     })} */}
                  </Grid>
               </Box>
            </Box>
         </Center>
      </Stack>
   )
}

export default QuestionDisplayer