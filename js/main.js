$(document).ready(function() { 
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
      $('.header_container').addClass('header_scroll');
      $('.nav ul li a').addClass('nav_scroll');
      $('.nav_login ul li a').addClass('nav_login_scroll');
      $('#logo_img').attr('src', 'img/logo1.png');
      $('.li_dropdown_container').addClass('dropdown_scroll');
    }
    else {
      $('.header_container').removeClass('header_scroll');
      $('.nav ul li a').removeClass('nav_scroll');
      $('.nav_login ul li a').removeClass('nav_login_scroll');
      $('#logo_img').attr('src', 'img/logo.png');
      $('.li_dropdown_container').removeClass('dropdown_scroll');
    } 
  });
});

