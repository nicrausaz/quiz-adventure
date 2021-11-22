Rails.application.routes.draw do

  # Quizzes routes
  # Params: limit, offset
  get '/quizzes', to: 'quizzes#index'

  get '/quiz/:shortname', to: 'quizzes#byShortname'

  get '/quiz/:shortname/questions', to: 'quizzes#withQuestions'

  # Questions routes
  get '/questions/:theme', to: 'questions#bytheme'


  # Themes
  # Params: limit, offset
  get '/themes', to: 'themes#index'
end
