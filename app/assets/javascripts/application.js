// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require jquery.turbolinks
//= require turbolinks
//= require bootstrap-sprockets
//= require spin
//= require ladda
//= require_tree .

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-118467617-1', 'auto');
ga('send', 'pageview');
setTimeout("ga('send','event','Temps passé sur la page','15 seconds')",15000);

$( document ).on('turbolinks:load', function() {

  $('#theCarousel').carousel({
    interval: 3000,
    pause: null,
    wrap: true
  });


 $('[id^=carousel-selector-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);
      $('#carousel-centre-media').carousel(id);
      $('#carousel-coeur-media').carousel(id);
      $('#carousel-deloc-media').carousel(id);
      $('#carousel-et-au-dela').carousel(id);
      $('#carousel-deconfinement').carousel(id);
  });

  $('#carousel-centre-media').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
  });
  $('#carousel-coeur-media').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
  });
  $('#carousel-deloc-media').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
  });
  $('#carousel-et-au-dela').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
  });
  $('#carousel-deconfinement').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
  });

  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 150);
    }
  }
  window.addEventListener("hashchange", offsetAnchor);
  window.setTimeout(offsetAnchor, 1);

  $(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      $('.social-btn').removeClass("animated fadeInUp");
      $('.social-btn').css("bottom", "-62px");
      $('.social-btn').addClass("animated fadeOutDown");
    }else{
      $('.social-btn').removeClass("animated fadeOutDown");
      $('.social-btn').css("bottom", "0px");
      $('.social-btn').addClass("animated fadeInUp");
    }
  });

  $('#angle-down').click(function() {
    $('#down').toggle();
  });

  $('#angle-down1').click(function() {
    $('#down1').toggle();
  });

  $('#angle-down2').click(function() {
    $('#down2').toggle();
  });

  $('.menu-service a').mouseenter(function() {
      $(this).children('.slide-up').addClass('translatey opacity');
      $(this).children('.slide-up-title').addClass('translatey');
      $(this).children('.slide-down').removeClass('opacity').addClass('translateyp');
    }).mouseleave(function() {
      $(this).children('.slide-up').removeClass('translatey opacity');
      $(this).children('.slide-up-title').removeClass('translatey');
      $(this).children('.slide-down').addClass('opacity').removeClass('translateyp');
  });

  function juizScrollTo(element){
  	$(element).click(function(){
  		var goscroll = false;
  		var the_hash = $(this).attr("href");
  		var regex = new RegExp("\#(.*)","gi");
  		var the_element = '';

  		if(the_hash.match("\#(.+)")) {
  			the_hash = the_hash.replace(regex,"$1");

  			if($("#"+the_hash).length>0) {
  				the_element = "#" + the_hash;
  				goscroll = true;
  			}
  			else if($("a[name=" + the_hash + "]").length>0) {
  				the_element = "a[name=" + the_hash + "]";
  				goscroll = true;
  			}

  			if(goscroll) {
  				$('html, body').animate({
  					scrollTop:$(the_element).offset().top
  				}, 'slow');
  				return false;
  			}
  		}
  	});
  };
  juizScrollTo('.wrapper5 a[href^="#"]');

  $("#button-service").click(function() {
    var l = Ladda.create(this);
    l.start();
    $.ajax({
      url: 'form-service',
      data: {
          value1: $('#form_service_status').val(),
          value2: $('#form_service_email').val(),
          value3: $('#form_service_phone').val(),
          value4: $('#form_service_name').val(),
          value5: $('#form_service_message').val()
      },
      type: "GET",
      success: function(data) {
        if(data.status == true) {
          $('#okidokki').html('<li style="list-style: none;"><i style="font-size:16px;color:#5cb85c;margin-bottom:10px;" class="fa fa-check-circle"> Formulaire envoyé</i></li>');
          $('.barre').css('display', 'none');
          $('#notoki').css('display', 'none');
        }
        if(data.status == false) {
          $('#notoki').html('<li style="list-style: none;"><i style="font-size: 16px;color:#ea5656;margin-bottom:10px;margin-top:10px;" class="fa fa-exclamation-circle"> L\'un des champs est manquant ou incorrect</i></li>');
          l.stop();
        }
      }
    });
  });
  $('#button-service').keypress(function(e){
    if ( e.which == 13 ) return false;
  });
  $('input#address').change(function() {
    if (this.checked) {
      $(".display-address").css('display', 'block');
    } else {
      $(".display-address").css('display', 'none');
    }
  });
  $("#button-boutique").click(function() {
    var l = Ladda.create(this);
    l.start();
    $.ajax({
      url: 'form-boutique',
      data: {
          value1: $('#form_boutique_status').val(),
          value2: $('#form_boutique_email').val(),
          value3: $('#form_boutique_phone').val(),
          value4: $('#form_boutique_name').val(),
          value5: $('#form_boutique_quantity').val(),
          value6: $('#form_boutique_size').val(),
          value7: $('#form_boutique_product').val(),
          value8: $('#form_boutique_color').val(),
          value8: $('#form_boutique_address').val(),
          value8: $('#form_boutique_cp').val(),
          value8: $('#form_boutique_city').val()
      },
      type: "GET",
      success: function(data) {
        if(data.status == true && $('input#cgv').is(':checked')) {
          $('.barre').css('display', 'none');
          $('#notoki').css('display', 'none');
          $("#button-boutique").css('display', 'none');
          if ($('#form_boutique_product').val() == "Sac"){
            if ($('input#address').is(':checked')){
              var price = 32*$('#form_boutique_quantity').val() + 6;
            } else {
              var price = 32*$('#form_boutique_quantity').val()
            }
          } else {
            if ($('input#address').is(':checked')){
              var price = 18*$('#form_boutique_quantity').val() + 6;
            } else {
              var price = 18*$('#form_boutique_quantity').val()
            }
          }
          $('#okidokki').html('<li style="list-style: none;"><i style="font-size:16px;color:#5cb85c;margin-bottom:10px;" class="fa fa-check-circle"> Pour finaliser votre commande de '+ price +' €, il vous suffit de cliquer sur Lydia pour réaliser le paiement.</i></li>');
          $('#lydia_payment_button').payWithLYDIA({
            message: $('#form_boutique_product').val(),
            amount: price,
            recipient: $('#form_boutique_phone').val(),
            vendor_token: $('#lydia_payment_button').data("vendor"),
        		payment_method		: "lydia",
        		currency			: "EUR",
        		type				: "phone"
          });
        }
        if(data.status == false) {
          $('#notoki').html('<li style="list-style: none;"><i style="font-size: 16px;color:#ea5656;margin-bottom:10px;margin-top:10px;" class="fa fa-exclamation-circle"> L\'un des champs est manquant ou incorrect</i></li>');
          if(!$('#form_boutique_email').val()){
            $('#form_boutique_email').addClass("empty");
          }else {
            $('#form_boutique_email').removeClass("empty");
          }
          if(!$('#form_boutique_phone').val()){
            $('#form_boutique_phone').addClass("empty");
          }else {
            $('#form_boutique_phone').removeClass("empty");
          }
          if($('input#cgv').is(':checked')){
            $('#cgv label').removeClass("red");
          }else {
            $('#cgv label').addClass("red");
          }
          l.stop();
        }
      }
    });
  });
  $('#button-boutique').keypress(function(e){
    if ( e.which == 13 ) return false;
  });

  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    var message = button.data('message')
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Ma commande : ' + recipient)
    modal.find('.modal-body #form_boutique_product').val(message)
  })

  $('#plus').click(function(e){
    e.preventDefault();
    fieldName = $(this).attr('field');
    var currentVal = parseInt($('input[name="form_boutique[quantity]"]').val());
    if (!isNaN(currentVal)) {
        $('input[name="form_boutique[quantity]"]').val(currentVal + 1);
    } else {
        $('input[name="form_boutique[quantity]"]').val(0);
    }
  });
  $("#minus").click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('field');
    var currentVal = parseInt($('input[name="form_boutique[quantity]"]').val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $('input[name="form_boutique[quantity]"]').val(currentVal - 1);
    } else {
        $('input[name="form_boutique[quantity]"]').val(0);
    }
  });
  $("#sac").click(function() {
    $("#size_form").css('display', 'none');
    $(".barre .list-inline").css('display', 'block');
    $("#color_form").css('display', 'none');
  });
  $("#t-shirt_h").click(function() {
    $("#size_form").css('display', 'block');
    $(".barre .list-inline").css('display', 'block');
    $("#color_form").css('display', 'block');
  });
  $("#t-shirt_f").click(function() {
    $("#size_form").css('display', 'block');
    $(".barre .list-inline").css('display', 'block');
    $("#color_form").css('display', 'none');
  });


  $("#button-partenaire").click(function() {
    var l = Ladda.create(this);
    l.start();
    $.ajax({
      url: 'form-partenaire',
      data: {
          value1: $('#form_partenaire_first_name').val(),
          value2: $('#form_partenaire_last_name').val(),
          value3: $('#form_partenaire_email').val(),
          value4: $('#form_partenaire_company_name').val(),
          value5: $('#form_partenaire_phone').val(),
          value6: $('#form_partenaire_message').val()
      },
      type: "GET",
      success: function(data) {
        if(data.status == true) {
          $('#okidokki').html('<li style="list-style: none;"><i style="font-size:16px;color:#5cb85c;margin-bottom:10px;" class="fa fa-check-circle"> Vous serez contacté quand votre achat sera disponible au centre d\'entrainement</i></li>');
          $('.barre').css('display', 'none');
          $('#notoki').css('display', 'none');
          setTimeout(function(){
            location.reload();
          }, 5000);
        }
        if(data.status == false) {
          $('#notoki').html('<li style="list-style: none;"><i style="font-size: 16px;color:#ea5656;margin-bottom:10px;margin-top:10px;" class="fa fa-exclamation-circle"> L\'un des champs est manquant ou incorrect</i></li>');
          l.stop();
        }
      }
    });
  });
  $('#button-partenaire').keypress(function(e){
    if ( e.which == 13 ) return false;
  });

  /****************************************************************************/
  /***************************  POPUP HOME PAGE   *****************************/
  /****************************************************************************/

  $('.popup-footer .close').on( "click", function(){
    $('.popup-footer').css('-webkit-animation', 'restrict 1s');
    setTimeout(function() {
        $('.popup-footer').css('display', 'none');
    }, 900);
  });

  //*********************************************************************************************************
  //********************************    MEDIA SELECT YOUTUBE    *********************************************
  //*********************************************************************************************************

  $('.image-card').on( "click", function(event){
    var image_card = $(event.delegateTarget);
    var youtube = image_card.data('url');
    $("iframe").attr('src',youtube);
    $(this).children().children().clone().appendTo("#video-content");
    $("#video-content h3").first().remove();
    $("#video-content h4").first().remove();
    $("#video-content i").first().remove();
    $("#video-content p").first().remove();
    $([document.documentElement, document.body]).animate({ scrollTop: $("iframe").offset().top-140 }, '500');
  });

  //*********************************************************************************************************
  //********************************       EFFECTIF ZOOM       *********************************************
  //*********************************************************************************************************

  $('.col-zoom').mouseover(function() {
    $( this ).parent().children().addClass("no-active");
    $( this ).addClass("active");
  });
  $('.col-zoom').mouseout(function() {
    $( this ).parent().children().removeClass("no-active");
    $( this ).removeClass("active");
  });

  //*********************************************************************************************************
  //********************************          LYDIA             *********************************************
  //*********************************************************************************************************

  function LYDIAProcess() {

		this.configKey	= [
			'vendor_token',
			'amount',
			'recipient',
			'order_ref',
			'browser_success_url',
			'browser_cancel_url',
			'confirm_url',
			'sale_desc',
			'payer_desc',
			'collector_desc',
			'expire_time',
			'end_date',
			'provider_token',
			'payment_recipient',
			'notify_payer',
			'notify_collector',
			'display_conf',
			'payment_method',
			'env',
			'render'
		];

		this.configToSkip = [
			'env',
			'render'
		]

		this.data = {
			vendor_token		: "",
			amount				: "",
			recipient			: "",
			order_ref 			: "",
			browser_success_url : "https://www.h-training.fr/boutique",
			browser_cancel_url 	: "https://www.h-training.fr/boutique",
			confirm_url 		: "",
			sale_desc 			: "",
			payer_desc 			: "",
			collector_desc 		: "",
			expire_time 		: "",
			end_date 			: "",
			provider_token 		: "",
			payment_recipient	: "",
			notify_payer 		: "",
			notify_collector 	: "",
			display_conf 		: "",
			payment_method		: "auto",
			currency			: "EUR",
			type				: "phone"
		}


		this.baseUrl	= "https://lydia-app.com/";
		this.isRunning 	= false;
	}

	LYDIAProcess.prototype.sendRequest = function() {
		if (this.isRunning == false) {
			this.isRunning = true;
			$.post(this.baseUrl+"api/request/do.json",
				   this.data,
   				   function(data) {
				 	if (data.error == 0) {
				 		document.location = data.mobile_url;
				 	} else {
					 	console.log(data);
				 	}
				}
			);
		}
	};

	$.fn.payWithLYDIA = function(data) {

		var lydiaProcess = new LYDIAProcess();

		for (var i = 0; i < lydiaProcess.configKey.length; i++) {
			if (lydiaProcess.configToSkip.indexOf(lydiaProcess.configKey[i]) < 0 && data[lydiaProcess.configKey[i]] != undefined) {
				lydiaProcess.data[lydiaProcess.configKey[i]] = data[lydiaProcess.configKey[i]];
			}
		}

		if (data.env && data.env == 'test') {
			lydiaProcess.baseUrl	= "https://homologation.lydia-app.com/";
		}

		if (data.render) {
			$(this).html(data.render);
		} else {
			$(this).html('<a href="#" onclick="return false;"><img class="lydia_payment_button" src="'+lydiaProcess.baseUrl+'assets/img/paymentbutton.png" height="40" /></a>');
		}

		$(this).click(function () {
			lydiaProcess.sendRequest();
		});
	}

  //*********************************************************************************************************
  //********************************    NEWSLETTER SENDINBLEU   *********************************************
  //*********************************************************************************************************


  $("#button-newsletter").click(function() {
    $.ajax({
      url: 'newsletter',
      data: {
          value: $('#newsletter_email').val()
      },
      type: "GET",
      success: function(data) {
        if(data.status == true) {
          $('#okidokki').html('<br><i style="font-size: 16px;color:#5cb85c;" class="fa fa-check-circle"> C\'est dans la boîte</i>');
          $('.barre').css('display', 'none');
          $('.oki').css('visibility', 'hidden');
          $('.oki').css('height', '0px');
          $("#positif").html('<i style="font-size: 16px;color:#5cb85c;margin-top:50px"> Bienvenue dans la communauté H-Training</i>');
          setTimeout(function(){
            $('.popup-footer').css('-webkit-animation', 'restrict 1s');
            setTimeout(function() {
                $('.popup-footer').css('display', 'none');
            }, 900);
          }, 2000);
        }
        if(data.status == false) {
          $('#notoki').html('<li><i style="font-size: 16px;color:#ea5656;" class="fa fa-exclamation-circle"> Email incorrect</i></li>');
          $("#negatif").html('<i style="font-size: 16px;color:#3a4cbc;;"> Votre E-mail est vide</i>');
        }
      }
    });
  });

//*********************************************************************************************************
//*************************************    POPUP FORM   ***************************************************
//*********************************************************************************************************

  $("#button-popup-form").click(function() {
    $("#form_popup_email").css('border-color', '#dce4ec');
    $("#form_popup_name").css('border-color', '#dce4ec');
    $("#form_popup_phone_number").css('border-color', '#dce4ec');
    $("#form_popup_sport").css('border-color', '#dce4ec');
    $("#form_popup_number").css('border-color', '#dce4ec');
    $("#form_popup_creneau").css('border-color', '#dce4ec');
    if ($('#form_popup_email').val() === "" || $('#form_popup_name').val() === "" || $('#form_popup_phone_number').val() === "" || $('#form_popup_sport').val() === "" || $('#form_popup_sport').val() === "" || $('#form_popup_number').val() === "" || $('#form_popup_creneau').val() === ""){
      if ($('#form_popup_email').val() === ""){
        $("#form_popup_email").css('border-color', '#cc2127');
      }
      if ($('#form_popup_name').val() === "") {
        $("#form_popup_name").css('border-color', '#cc2127');
      }
      if ($('#form_popup_phone_number').val() === "") {
        $("#form_popup_phone_number").css('border-color', '#cc2127');
      }
      if ($('#form_popup_sport').val() === "") {
        $("#form_popup_sport").css('border-color', '#cc2127');
      }
      if ($('#form_popup_number').val() === "") {
        $("#form_popup_number").css('border-color', '#cc2127');
      }
      if ($('#form_popup_creneau').val() === "") {
        $("#form_popup_creneau").css('border-color', '#cc2127');
      }
    } else {
      $.ajax({
        url: 'form-popup',
        data: {
            value1: $('#form_popup_email').val(),
            value2: $('#form_popup_name').val(),
            value3: $('#form_popup_sport').val(),
            value4: $('#form_popup_number').val(),
            value5: $('#form_popup_creneau').val(),
            value6: $('#form_popup_phone_number').val()
        },
        type: "GET",
        success: function(data) {
          if(data.status == true) {
            $('#okidokki').html('<br><i style="font-size: 16px;color:#5cb85c;" class="fa fa-check-circle"> C\'est dans la boîte</i>');
            $('.barre').css('display', 'none');
            $('.oki').css('visibility', 'hidden');
            $('.oki').css('height', '0px');
            $("#positif").html('<i style="font-size: 16px;color:#5cb85c;margin-top:50px"> Bienvenue dans le collectif H-Training</i>');
            setTimeout(function(){
              $('.popup-footer').css('-webkit-animation', 'restrict 1s');
              setTimeout(function() {
                  $('.popup-footer').css('display', 'none');
              }, 900);
            }, 2000);
          }
          if(data.status == false) {
            $('#notoki').html('<li><i style="font-size: 16px;color:#ea5656;" class="fa fa-exclamation-circle"> Email incorrect</i></li>');
            $("#negatif").html('<i style="font-size: 16px;color:#3a4cbc;;"> Votre E-mail est vide</i>');
          }
        }
      });
    }
  });

  $('#button-popup-form').keypress(function(e){
    if ( e.which == 13 ) return false;
  });

});
