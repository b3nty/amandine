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

  def h_training
  end

  def services
  end

  def form_services
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

  def reservation
  end

  def espace_perso
  end

  def contact
  end

  def mentions_legales
  end
end
