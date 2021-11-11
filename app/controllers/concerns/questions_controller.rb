class QuestionsController < ApplicationController
   def bytheme
      all_question_of_theme = Question.where(theme_id: params['theme'])

      render json: all_question_of_theme
   end
end