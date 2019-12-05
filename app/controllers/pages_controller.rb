class PagesController < ApplicationController

  def home

  end

  def newsletter
    gibbon = Gibbon::Request.new(api_key: Figaro.env.mailchimp_api_key)
    if EmailValidator.valid?(params[:value])
      result = {:status => true}
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
      begin
        gibbon.lists("65bdb69476").members.create(body: {email_address: params[:value], status: "subscribed"})
      rescue Gibbon::MailChimpError => e
        puts "Houston, we have a problem: #{e.message} - #{e.raw_body}"
      end
    else
      result = {:status => false}
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
    end
  end

  def notre_mission
  end

  def effectif
  end

  def media
  end

  def partenaires
  end

  def boutique
  end

  def form_boutique
    @form_boutique = FormBoutique.new
    @form_boutique.status = params[:value1]
    @form_boutique.email = params[:value2]
    @form_boutique.phone = params[:value3]
    @form_boutique.name = params[:value4]
    @form_boutique.message = params[:value5]
    if ( !@form_boutique.status.blank? && EmailValidator.valid?(params[:value2]) && !@form_boutique.phone.blank? && !@form_boutique.name.blank? && !@form_boutique.message.blank? )
      result = {:status => true}
      @form_boutique.save
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
      UserMailer.boutique(@form_boutique).deliver
    else
      result = {:status => false}
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
    end
  end

  def services
  end

  def form_contact
    @form_contact = FormContact.new
    @form_contact.status = params[:value1]
    @form_contact.email = params[:value2]
    @form_contact.phone = params[:value3]
    @form_contact.name = params[:value4]
    @form_contact.message = params[:value5]
    if ( !@form_contact.status.blank? && EmailValidator.valid?(params[:value2]) && !@form_contact.phone.blank? && !@form_contact.name.blank? && !@form_contact.message.blank? )
      result = {:status => true}
      @form_contact.save
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
      UserMailer.contact(@form_contact).deliver
    else
      result = {:status => false}
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
    end
  end

  def reservation
  end

  def espace_perso
  end

  def contact
  end

  def mentions_legales
  end
end
