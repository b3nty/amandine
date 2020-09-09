class FormPopup < ActiveRecord::Base
  SPORT = [ "Rugby", "football", "triathlon", "tennis", "basket", "running", "handball",  "natation", "voile", "golf", "autre"]
  NUMBER = [ "seul", "2", "3", "plus"]
  CRENEAU = [ "mardi-jeudi 18h", "mercredi-vendredi 18h", "mercredi-vendredi 12h", "mardi-jeudi 12h", "mercredi-vendredi 17h"]
end
