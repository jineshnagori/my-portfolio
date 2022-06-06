$("body").on("click", "#toggleIcon", function (e) {
  const container = document.getElementById("simulateDarkMode");
  const dataTheme = container.getAttribute("data-theme");

  if (dataTheme === "dark") {
    container.setAttribute("data-theme", "light");
  } else {
    container.setAttribute("data-theme", "dark");
  }
});
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".nav-scroll").addClass("nav-strict");
  } else {
    $(".nav-scroll").removeClass("nav-strict");
  }
});

$("body").on("click", "i", function (e) {
  $(".show, .hide").toggle();
});

// Smooth Scroll
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});