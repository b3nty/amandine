class FormBoutique < ActiveRecord::Base
  STATUS = [ "Particulier", "Entreprise", "Club"]
  SIZE = [ "XS", "S", "M", "L", "XL", "XXl", "XXXL"]
  SIZE_L = [ "S", "M", "L"]
  SIZE_S = [ "S", "M", "L", "XL", "XXl", "XXXL"]
  COLORS = [ "Blanc", "Noir"]
  COLORS_S = [ "Noir", "Gris", "Bleu Marine"]
end
