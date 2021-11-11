class QuizzesController < ApplicationController
   def index
      all_quizzes = Quiz.all
      render json: all_quizzes
   end 
end