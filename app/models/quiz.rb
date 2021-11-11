class Quiz
   include Mongoid::Document
   store_in collection: 'quizzes'

   field :shortname, type: String
   field :image, type: String
   field :title, type: String
end