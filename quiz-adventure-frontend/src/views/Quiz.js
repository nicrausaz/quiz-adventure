import React, { useEffect, useState } from "react"
import { Container } from "@chakra-ui/layout"
import { Stack } from "@chakra-ui/layout"
import axios from "../plugins/axios"
import { useParams } from "react-router-dom"
import QuestionDisplayer from "../components/question/QuestionDisplayer"
import TitleDisplayer from "../components/question/TitleDisplayer"
import QuestionsScores from "../components/question/QuestionsScores"


const Quiz = () => {

   let params = useParams()

   const [quiz, setQuiz] = useState({})
   const [questions, setQuestions] = useState([])
   const [quizLoaded, setLoaded] = useState(false)
   const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1)
   const [scores, setScores] = useState([])

   const questionResult = (result) => {
      setScores(a => [...a, result])

      // Next question
      if (currentQuestionNumber !== questions.length) {
         setCurrentQuestionNumber(currentQuestionNumber + 1)
      }
   }

   const getQuiz = async () => {
      axios.get(`/quiz/${params.id}/questions`).then(response => {
         setQuiz(response.data.quiz)
         setQuestions(response.data.questions)
         setLoaded(true)
      })
         .catch(e => console.log(e))
   }

   const getCurrentQuestion = () => {
      return questions[currentQuestionNumber - 1]
   }

   // eslint-disable-next-line 
   useEffect(() => { getQuiz() }, [])

   return (
      <Container maxW="container.lg">
         {quizLoaded === true &&
            <Stack spacing={{ md: 0 }} py={{ base: 10 }}>

               <TitleDisplayer
                  numberOfQuestions={questions.length}
                  currentQuestion={currentQuestionNumber}
                  image={quiz.image}
                  title={quiz.title}
               />

               <QuestionDisplayer
                  question={getCurrentQuestion().question}
                  answers={getCurrentQuestion().answers}
                  image={quiz.image}
                  onResult={questionResult} />

               <QuestionsScores scores={scores}/>

            </Stack>
         }
      </Container>
   )
}

export default Quiz