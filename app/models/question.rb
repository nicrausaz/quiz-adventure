class Question
   include Mongoid::Document

   #field :id
   field :language, type: String
   field :picture, type: String
   field :theme_id, type: String
   field :question, type: String
   field :difficulty, type: String
   field :answers, type: Array, default: []

   index({id: 1}, { unique: true})
end