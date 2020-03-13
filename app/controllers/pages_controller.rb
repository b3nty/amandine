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
    @form_boutique.quantity = params[:value5]
    @form_boutique.size = params[:value6]
    @form_boutique.product = params[:value7]
    if ( !@form_boutique.status.blank? && EmailValidator.valid?(params[:value2]) && !@form_boutique.phone.blank? && !@form_boutique.name.blank? && !@form_boutique.quantity.blank? && !@form_boutique.size.blank? && !@form_boutique.product.blank? )
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

  def form_partenaire
    @form_partenaire = FormPartenaire.new
    @form_partenaire.first_name = params[:value1]
    @form_partenaire.last_name = params[:value2]
    @form_partenaire.email = params[:value3]
    @form_partenaire.company_name = params[:value4]
    @form_partenaire.phone = params[:value5]
    @form_partenaire.message = params[:value6]
    if ( !@form_partenaire.first_name.blank? && !@form_partenaire.last_name.blank? && EmailValidator.valid?(params[:value3]) && !@form_partenaire.phone.blank? )
      result = {:status => true}
      @form_partenaire.save
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
      UserMailer.partenaire(@form_partenaire).deliver
    else
      result = {:status => false}
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
    end
  end

  def form_service
    @form_service = FormService.new
    @form_service.status = params[:value1]
    @form_service.email = params[:value2]
    @form_service.phone = params[:value3]
    @form_service.name = params[:value4]
    @form_service.message = params[:value5]
    if ( !@form_service.status.blank? && EmailValidator.valid?(params[:value2]) && !@form_service.phone.blank? && !@form_service.name.blank? && !@form_service.message.blank? )
      result = {:status => true}
      @form_service.save
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
      UserMailer.contact(@form_service).deliver
    else
      result = {:status => false}
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
    end
  end

  def contact
  end

  def mentions_legales
  end
end
