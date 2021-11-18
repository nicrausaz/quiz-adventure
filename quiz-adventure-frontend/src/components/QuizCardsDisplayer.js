import React from "react"
import { Grid } from "@chakra-ui/layout"
import QuizCard from "./QuizCard"

const QuizCardsDisplayer = () => {
   // this.state = {
   //    quizzes: [
   //       {
   //          shortname: "harrypotter",
   //          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1200px-Harry_Potter_wordmark.svg.png",
   //          title: "Harry Potter"
   //       },
   //       {
   //          shortname: "harrypotter2",
   //          image: "https://wesportfr.com/wp-content/uploads/2020/12/NBA-logo.jpg",
   //          title: "NBA"
   //       },
   //       {
   //          shortname: "harrypotter3",
   //          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1200px-Harry_Potter_wordmark.svg.png",
   //          title: "Software"
   //       },
   //       {
   //          shortname: "harrypotter4",
   //          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1200px-Harry_Potter_wordmark.svg.png",
   //          title: "Harry Potter 4"
   //       }
   //    ]
   // }

   const listQuizCards = () => {
      return this.state.quizzes.map(quiz =>
         <QuizCard title={quiz.title} img={quiz.image} id={quiz.shortname} key={quiz.shortname}></QuizCard>
      )
   }

   return (
      <Grid templateColumns="repeat(3, 1fr)" gap={10} pb={200}>
         {listQuizCards()}
      </Grid>
   )
}

export default QuizCardsDisplayer