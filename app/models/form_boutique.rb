class FormBoutique < ActiveRecord::Base
  STATUS = [ "Particulier", "Entreprise", "Club"]
  SIZE = [ "XS", "S", "M", "L", "XL", "XXl", "XXXL"]
end
