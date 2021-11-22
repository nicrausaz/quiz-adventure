import React, { useEffect, useState } from "react"
import { Container } from "@chakra-ui/layout"
import axios from "../plugins/axios"
import { useParams } from "react-router-dom"
import QuestionDisplayer from "../components/QuestionDisplayer"

const Quiz = (props) => {

   let params = useParams()

   const [quiz, setQuiz] = useState({})
   const [questions, setQuestions] = useState([])
   const [quizLoaded, setLoaded] = useState(false)
   const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1)


   const getQuiz = async () => {
      axios.get(`/quiz/${params.id}/questions`).then(response => {
         console.log(response.data)
         setQuiz(response.data.quiz)
         setQuestions(response.data.questions)

         console.log(questions[currentQuestionNumber - 1])
      })
         .catch(e => console.log(e))
   }

   // eslint-disable-next-line 
   useEffect(() => { getQuiz() }, [])

   return (
      <Container maxW="container.lg">
         {quizLoaded ?
            <QuestionDisplayer
               title={quiz.title}
               number={currentQuestionNumber}
               question={null}
               image={quiz.image} />
            : 'Loading...'}
      </Container>
   )
}

export default Quiz