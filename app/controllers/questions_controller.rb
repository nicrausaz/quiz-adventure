class QuestionsController < ApplicationController
   def bytheme
      questions_quiz = Question.where(theme_id: params['theme']).sample(10)

      render json: questions_quiz
   end
end