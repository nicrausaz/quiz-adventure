class QuizzesController < ApplicationController
   def index
      all_quizzes = Quiz.all.limit(params['limit']).offset(params['offset'])
      render json: all_quizzes
   end 
end