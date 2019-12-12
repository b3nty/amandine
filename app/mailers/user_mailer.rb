class UserMailer < ApplicationMailer
  def contact(client)
    @client = client
    mail(to: "amandine@h-training.fr", subject: 'h-training | Demande de contact', :from => @client.email)
  end

  def boutique(client)
    @client = client
    mail(to: "fabienne@h-training.fr", subject: 'h-training | Demande d\'achat', :from => @client.email)
  end
end
