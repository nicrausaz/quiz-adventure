import React from "react"
import { Box, Stack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Link } from "react-router-dom"

const QuizCard = (props) => {
   return (
      <Link to={`/quiz/${props.id}`}>
         <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden" cursor="pointer" className="quiz-card" background="white">
            <Stack spacing={5}>
               <Image src={props.img} alt="" p={5} fallbackSrc="https://via.placeholder.com/150" />
               <Box
                  textAlign="center"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  textTransform="uppercase"
               >
                  {props.title}
               </Box>
            </Stack>
         </Box>
      </Link>
   )
}

export default QuizCard