Rails.application.routes.draw do

  # Quizzes routes
  # Params: limit, offset
  get '/quizzes', to: 'quizzes#index'

  # Questions routes
  get '/questions/:theme', to: 'questions#bytheme' # TODO: random 10 questions
end
