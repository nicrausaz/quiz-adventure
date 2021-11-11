class Question
   include Mongoid::Document

   field :language, type: String
   field :picture, type: String

end