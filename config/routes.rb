Rails.application.routes.draw do

  match '/h-training', :to => 'pages#h_training', :via => [:get]
  match '/services', :to => 'pages#services', :via => [:get]
  match '/actualites', :to => 'pages#actualites', :via => [:get]
  match '/reservation', :to => 'pages#reservation', :via => [:get]
  match '/espace-perso', :to => 'pages#espace_perso', :via => [:get]
  match '/newsletter', :to => 'pages#newsletter', :via => [:get]
  match '/form-services', :to => 'pages#form_services', :via => [:get]
  match '/contact', :to => 'pages#contact', :via => [:get]
  match '/mentions-legales', :to => 'pages#mentions_legales', :via => [:get]

  root :to => 'pages#home'
end
