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
  $('.carousel-home').carousel({
    interval: 3000,
    pause: null,
    wrap: true
  })

  $(window).scroll(function() {
    var loc = window.location.pathname;
    if($(window).scrollTop() > 78) {
      $(".navbar-transparent").css("background-color", "rgba(248, 248, 248, 0.8)").fadeIn('slow');
      $(".navbar-default .navbar-nav li a").css("color", "#222").fadeIn('slow');
      $(".navbar-transparent").css("box-shadow", "0 2px 0 rgba(0, 0, 0, 0.2)").fadeIn('slow');
      $("#log").attr("src", "https://s3.eu-west-3.amazonaws.com/h-training/logo-h-training-black.png").fadeIn('slow');
      $('.navbar-transparent .navbar-nav li').find('a').each(function() {
        if($(this).attr('href') == loc){
          $(this).addClass('active');
        }
      });
    }
  });
  $(window).scroll(function() {
    var loc = window.location.pathname;
    if($(window).scrollTop() < 78) {
      $(".navbar-transparent").css("background-color", "transparent");
      $(".navbar-transparent").css("box-shadow", "0 0 0 rgba(0, 0, 0, 0.2)");
      $(".navbar-default .navbar-nav li a").css("color", "#fff").fadeIn('slow');
      $("#log").attr("src", "https://s3.eu-west-3.amazonaws.com/h-training/logo-h-training-white.png");
      $('.navbar-transparent').find('a').each(function() {
        $(this).toggleClass('active', $(this).attr('href') == loc);
      });
    }
  });

  $(window).scroll(function() {
    if($(window).scrollTop() > 300) {
      $('.btn-scroll-top').removeClass("animated fadeOutDown");
      $('.btn-scroll-top').css("bottom", "0px");
      $('.btn-scroll-top').addClass("animated fadeInUp");
    }
  });

  $(window).scroll(function() {
    if($(window).scrollTop() < 300) {
      $('.btn-scroll-top').removeClass("animated fadeInUp");
      $('.btn-scroll-top').css("bottom", "-62px");
      $('.btn-scroll-top').addClass("animated fadeOutDown");
    }
  });

  $('.btn-scroll-top').on("click", function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
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

  $("#button-newsletter").click(function() {
    $.ajax({
      url: 'newsletter',
      data: {
          value: $('#contact_email').val()
      },
      type: "GET",
      success: function(data) {
        if(data.status == true) {
          $('#okidokki').html('<li><i style="font-size:16px;color:#5cb85c;margin-bottom:10px;" class="fa fa-check-circle"> C\'est dans la boîte</i></li>');
          $('.barre').css('display', 'none');
          $('#notoki').css('display', 'none');
        }
        if(data.status == false) {
          $('#notoki').html('<li><i style="font-size: 16px;color:#ea5656;margin-bottom:10px;" class="fa fa-exclamation-circle"> Email incorrect</i></li>');
        }
      }
    });
  });
  $('#button-newsletter').keypress(function(e){
    if ( e.which == 13 ) return false;
  });

  $("#button-services").click(function() {
    var l = Ladda.create(this);
    l.start();
    $.ajax({
      url: 'form-services',
      data: {
          value1: $('#form_services_status').val(),
          value2: $('#form_services_email').val(),
          value3: $('#form_services_phone').val(),
          value4: $('#form_services_name').val(),
          value5: $('#form_services_message').val()
      },
      type: "GET",
      success: function(data) {
        if(data.status == true) {
          $('#okidokki').html('<li><i style="font-size:16px;color:#5cb85c;margin-bottom:10px;" class="fa fa-check-circle"> Formulaire envoyé</i></li>');
          $('.barre').css('display', 'none');
          $('#notoki').css('display', 'none');
        }
        if(data.status == false) {
          $('#notoki').html('<li><i style="font-size: 16px;color:#ea5656;margin-bottom:10px;margin-top:10px;" class="fa fa-exclamation-circle"> L\'un des champs est manquant ou incorrect</i></li>');
          l.stop();
        }
      }
    });
  });
  $('#button-services').keypress(function(e){
    if ( e.which == 13 ) return false;
  });
});
