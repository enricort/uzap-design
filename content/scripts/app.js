


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

  //Dribble shots
  $.jribbble.setToken('bb2767d662736526165860acaf88f281ae69eee35ecb93f8e96109f41ea7bf71');
  $.jribbble.users('BalkanBrothers').shots({ per_page: 8 }).then(function (shots) {
    var no = 1;
    shots.forEach(function (shot) {
      if ($(".dribble .s" + no).hasClass("big")) {
        $(".dribble .s" + no).css("background-image", "url('" + shot.images.hidpi + "')");
      } else {
        $(".dribble .s" + no).css("background-image", "url('" + shot.images.normal + "')");
      }
      $(".dribble .s" + no).addClass("active").attr("href", shot.html_url);
      $(".dribble .s" + no + " span").text(shot.title);
      no++;
    });
  });

  
});




