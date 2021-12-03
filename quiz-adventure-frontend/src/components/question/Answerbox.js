import { Center } from "@chakra-ui/layout"

const AnswerBox = ({ title, isGood, revealed, onSelect }) => {

   const clickAction = () => onSelect(isGood)

   const getBgColor = () => {
      if (revealed) {
         return isGood ? 'green' : 'red'
      }
      return '#eeeeee'
   }

   return (
      <Center w="100%" h="50" bg={getBgColor} cursor="pointer" onClick={clickAction}>
         {title}
      </Center>
   )
}

export default AnswerBox