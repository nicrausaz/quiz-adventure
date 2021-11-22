class QuizzesController < ApplicationController
   # Get all quizzes
   def index
      all_quizzes = Quiz.all.limit(params['limit']).offset(params['offset'])
      render json: all_quizzes
   end 

   # Get quiz by shortname
   def byShortname
      quiz = Quiz.where(shortname: params['shortname']).first()

      if quiz
         render json: quiz
      else
         render :text => 'Quiz not found', :status => '404'
      end
   end

      # Get quiz by shortname with questions
   def withQuestions
      quiz = Quiz.where(shortname: params['shortname']).first()

      questions = Question.where(theme_id: quiz[:shortname]).sample(10)

      if quiz
         render json: {quiz: quiz, questions: questions}
      else
         render :text => 'Quiz not found', :status => '404'
      end
   end
end