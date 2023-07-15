$("body").on("click", "#toggleIcon", function (e) {
  setTimeout(function () {
    const container = document.getElementById("simulateLightMode");
    const dataTheme = container.getAttribute("data-theme");

    if (dataTheme === "light") {
      container.setAttribute("data-theme", "dark");
      document.getElementById("favicon").href = "/assets/images/dhero.png";
    } else {
      container.setAttribute("data-theme", "light");
      document.getElementById("favicon").href = "/assets/images/hero.png";
    }
  }, 100);
});

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".header").addClass("overlayHeader");
  } else {
    $(".header").removeClass("overlayHeader");
  }
});

$("body").on("click", "i", function (e) {
  setTimeout(function () {
    $(".show, .hide").toggle();
  }, 100);
});