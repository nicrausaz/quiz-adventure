import { Image } from "@chakra-ui/image"
import { Flex, Box, Spacer } from "@chakra-ui/layout"

const TitleDisplayer = ({ numberOfQuestions, currentQuestion, title, image }) => {
   return (
      <>
         <Flex bg="#eeeeee">
            <Box p="4">
               {title}
            </Box>
            <Spacer />
            <Box p="4">
               {currentQuestion} / {numberOfQuestions}
            </Box>
         </Flex>
         <Image src={image} p={100} />
      </>
   )
}

export default TitleDisplayer