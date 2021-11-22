import { Center } from "@chakra-ui/layout"
import { useState } from "react"

const AnswerBox = ({title, isGood}) => {

   const [isRevealed, setRevealed] = useState(false)

   function reveal () {
      setRevealed(true)
   }

   function getBgColor () {
      if (isRevealed) {
         return isGood ? 'green' : 'red'
      }
      return '#eeeeee'
   }

   return (
      <Center w="100%" h="50" bg={getBgColor} cursor="pointer" onClick={reveal}>
         {title}
      </Center>
   )
}

export default AnswerBox