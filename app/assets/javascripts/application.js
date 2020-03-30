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

  /***************************   centre   *******************************************/
  /* copy loaded thumbnails into carousel  */
  $('#gallery_centre .row .thumbnail').each(function(i) {
    var item_centre = $('<div class="item item_centre"></div>');
    var itemDiv_centre = $(this).parents('div');

    $(itemDiv_centre.html()).appendTo(item_centre);
    item_centre.appendTo('.carousel-inner_centre');
    if (i==0){ // set first item active
     item_centre.addClass('active');
    }
  });
  /* activate the carousel */
  $('#modalCarouselCentre').carousel({interval:false});
  /* change modal title when slide changes */
  $('#modalCarouselCentre').on('slid.bs.carousel', function () {
    $('.modal-title').html($(this).find('.active').attr("title"));
  })
  /* when clicking a thumbnail */
  $('#gallery_centre .row .thumbnail').click(function(){
    var idx_centre = $(this).parents('div').index();
  	var id_centre = parseInt(idx_centre);
  	$('#myModalCentre').modal('show'); // show the modal
    $('#modalCarouselCentre').carousel(id_centre); // slide carousel to selected
  });

  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
    	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

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
          value7: $('#form_boutique_product').val()
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
  $('#button-boutique').keypress(function(e){
    if ( e.which == 13 ) return false;
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
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    var message = button.data('message')
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Ma commande : ' + recipient)
    modal.find('.modal-body #form_partenaire_product').val(message)
  })

  $('#plus').click(function(e){
    e.preventDefault();
    fieldName = $(this).attr('field');
    var currentVal = parseInt($('input[name="form_partenaire[quantity]"]').val());
    if (!isNaN(currentVal)) {
        $('input[name="form_partenaire[quantity]"]').val(currentVal + 1);
    } else {
        $('input[name="form_partenaire[quantity]"]').val(0);
    }
  });
  $("#minus").click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('field');
    var currentVal = parseInt($('input[name="form_partenaire[quantity]"]').val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $('input[name="form_partenaire[quantity]"]').val(currentVal - 1);
    } else {
        $('input[name="form_partenaire[quantity]"]').val(0);
    }
  });
  $("#sac").click(function() {
    $("#form_partenaire_size").css('display', 'none');
    $(".barre .list-inline").css('display', 'none');
  });
  $("#t-shirt_h").click(function() {
    $("#form_partenaire_size").css('display', 'inline-block');
    $(".barre .list-inline").css('display', 'inline-block');
  });
  $("#t-shirt_f").click(function() {
    $("#form_partenaire_size").css('display', 'inline-block');
    $(".barre .list-inline").css('display', 'inline-block');
  });

  /****************************************************************************/
  /***************************  POPUP HOME PAGE   *****************************/
  /****************************************************************************/

  function setCookie(cname, cvalue, times) {
    var d = new Date();
    d.setTime(d.getTime() + times);
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
  }

  var cookie = getCookie('shown');
  if (!cookie) {
    showPopup();
  }

  function showPopup() {
    setCookie('shown', 'true', 100);
    $('#MyPopup').modal('show')
  }

  $("#button-popup").click(function() {
    var l = Ladda.create(this);
    l.start();
    $.ajax({
      url: 'form-popup',
      data: {
          value1: $('#form_popup_email').val(),
      },
      type: "GET",
      success: function(data) {
        if(data.status == true) {
          $('#okidokki').html('<li style="list-style: none;"><i style="font-size:16px;color:#5cb85c;margin-bottom:10px;" class="fa fa-check-circle">Vous êtes bien inscrits, dès demain vous receverez votre programme par E-mail</i></li>');
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
  $('#form_popup_email').keypress(function(e){
    if ( e.which == 13 ) return false;
  });
});
