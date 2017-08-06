


$(document).ready(function () {

  //Dummy links
  $("a[href=#]").click(function (e) {e.preventDefault();});

  //Animated ancor linking
  $('a[href*=#]:not([href=#])').on('click', function (event) {
    if ($(this.hash).offset() != undefined) {
      event.preventDefault();
      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 750);
    }
    $(".mobilemenu-toggle").removeClass("active");
    $(".main-header, .main-content, .main-footer").removeClass("mobilemenu");
  });

  //Full Height
  $(".full-height-js").css("height", $(window).height() + "px");
  $(".full-min-height-js").css("min-height", $(window).height() + "px");

  // Mobile menu
  $(".mobilemenu-toggle").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(".main-header, .main-content, .main-footer").addClass("mobilemenu");
    } else {
      $(this).removeClass("active");
      $(".main-header, .main-content, .main-footer").removeClass("mobilemenu");
    }
  });

  //Animations
  new WOW().init();


  
});




