class Quiz
   include Mongoid::Document

   # field :shortname, type: String
   field :image, type: String
   field :title, type: String

   index({shortname: 1}, { unique: true})
end