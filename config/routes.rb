Rails.application.routes.draw do

  # Quizzes routes
  get '/quizzes', to: 'quizzes#index'

  # Questions routes
  get '/questions/:theme', to: 'questions#bytheme'
end
