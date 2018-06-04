(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-118467617-1', 'auto');
ga('send', 'pageview');
setTimeout("ga('send','event','Temps passé sur la page','15 seconds')",15000);

$( document ).on('turbolinks:load', function() {
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
});
