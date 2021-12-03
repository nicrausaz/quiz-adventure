import { Flex, Box } from "@chakra-ui/layout"
import { Badge } from '@chakra-ui/react'

const QuestionsScores = ({ scores }) => {

   const color = (result) => result ? 'green' : 'red'

   return (
      <Flex bg="#eeeeee">
         <Box p="4">
            {scores.map((s, i) => 
               <Badge variant='solid' fontSize='1.5em' mx="5" colorScheme={color(s)} key={i}>{i}</Badge>
            )}
         </Box>
      </Flex>
   )
}

export default QuestionsScores