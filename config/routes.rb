Rails.application.routes.draw do

  # match '/h-training', :to => 'pages#h_training', :via => [:get]
  match '/notre-mission', :to => 'pages#notre_mission', :via => [:get]
  match '/services', :to => 'pages#services', :via => [:get]
  match '/effectif', :to => 'pages#effectif', :via => [:get]
  # match '/actualites', :to => 'pages#actualites', :via => [:get]
  # match '/reservation', :to => 'pages#reservation', :via => [:get]
  # match '/espace-perso', :to => 'pages#espace_perso', :via => [:get]
  match '/partenaires', :to => 'pages#partenaires', :via => [:get]
  match '/media', :to => 'pages#media', :via => [:get]
  match '/boutique', :to => 'pages#boutique', :via => [:get]
  match '/newsletter', :to => 'pages#newsletter', :via => [:get]
  match '/form-contact', :to => 'pages#form_contact', :via => [:get]
  match '/form-boutique', :to => 'pages#form_boutique', :via => [:get]
  match '/contact', :to => 'pages#contact', :via => [:get]
  match '/mentions-legales', :to => 'pages#mentions_legales', :via => [:get]

  get "sitemap.xml" => "pages#sitemap", format: :xml, as: :sitemap

  root :to => 'pages#home'
end
