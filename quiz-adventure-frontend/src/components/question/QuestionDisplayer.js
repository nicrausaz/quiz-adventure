import { useState } from "react"
import { Box, Text, Center, Grid } from "@chakra-ui/layout"
import AnswerBox from "./Answerbox"


const QuestionDisplayer = ({ question, answers, onResult }) => {

   const [mustReveal, setMustReveal] = useState(false)

   const onSelectedAnswer = (isGood) => {
      setMustReveal(true)
      isGood ? onResult(true) : onResult(false)
   }

   const displayAnswers = answers.map((answer, i) => {
      return <AnswerBox
         title={answer.option}
         isGood={answer.isTheAnswer}
         key={i}
         onSelect={onSelectedAnswer}
         revealed={mustReveal}
      />
   })

   return (
      <Center>
         <Box overflow="hidden" width="100%">
            <Center bg="#eeeeee" p="4">
               <Text>{question}</Text>
            </Center>
            <Box p="6">
               <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                  {displayAnswers}
               </Grid>
            </Box>
         </Box>
      </Center>
   )
}

export default QuestionDisplayer