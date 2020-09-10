class PagesController < ApplicationController

  def home

  end

  def newsletter
    # Load the gem
    require 'sib-api-v3-sdk'

    # Setup authorization
    SibApiV3Sdk.configure do |config|
      # Configure API key authorization: api-key
      config.api_key['api-key'] = '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'
      # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
      #config.api_key_prefix['api-key'] = 'Bearer'
    end

    if EmailValidator.valid?(params[:value])
      result = {:status => true}
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
      begin
        SibApiV3Sdk::ContactsApi.new.create_contact(
          email: params[:value],
          listIds: [12],
          updateEnabled: true,
        )
      rescue SibApiV3Sdk::ApiError => e
        puts "Exception when calling ContactsApi->create_contact: #{e}"
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

  def form_popup
    @form_popup = FormPopup.new
    @form_popup.email = params[:value1]
    @form_popup.name = params[:value2]
    @form_popup.sport = params[:value3]
    @form_popup.number = params[:value4]
    @form_popup.creneau = params[:value5]
    if ( EmailValidator.valid?(params[:value1]))
      result = {:status => true}
      @form_popup.save
      respond_to do |format|
        format.json { render :json => result.to_json }
      end
      # UserMailer.popup(@form_popup).deliver
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
    if ( !@form_partenaire.first_name.blank? && !@form_partenaire.last_name.blank? && EmailValidator.valid?(params[:value3]))
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

  def form_boutique
    @form_boutique = FormBoutique.new
    @form_boutique.status = params[:value1]
    @form_boutique.email = params[:value2]
    @form_boutique.phone = params[:value3]
    @form_boutique.name = params[:value4]
    @form_boutique.quantity = params[:value5]
    @form_boutique.size = params[:value6]
    @form_boutique.product = params[:value7]
    @form_boutique.color = params[:value8]
    @form_boutique.address = params[:value9]
    @form_boutique.cp = params[:value10]
    @form_boutique.city = params[:value11]
    if ( EmailValidator.valid?(params[:value2]) && !@form_boutique.phone.blank? )
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

  def form_service
    @form_service = FormService.new
    @form_service.status = params[:value1]
    @form_service.email = params[:value2]
    @form_service.phone = params[:value3]
    @form_service.name = params[:value4]
    @form_service.message = params[:value5]
    if ( EmailValidator.valid?(params[:value2]) && !@form_service.name.blank? )
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
