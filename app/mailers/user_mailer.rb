class UserMailer < ApplicationMailer
  def contact(client)
    @client = client
    mail(to: "amandine@h-training.fr", subject: 'h-training | Demande de contact', :from => @client.email)
  end

  def boutique(client)
    @client = client
    mail(to: ["amandine@h-training.fr", "communication@h-training.fr"], subject: 'h-training | Demande d\'achat', :from => @client.email)
  end

  def popup(client)
    @client = client
    mail(to: "amandine@h-training.fr", subject: 'h-training | Rejoins un collectif', :from => @client.email)
  end

  def partenaire(client)
    @client = client
    mail(to: "amandine@h-training.fr", subject: 'h-training | Demande de partenariat', :from => @client.email)
  end
end
