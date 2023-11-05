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

$("body").on("click", "#toggleIcon", function (e) {
  setTimeout(function () {
    $(".show, .hide").toggle();
  }, 100);
});

$("body").on("click", ".project-item", function (e) {
  const urls = ["https://amitcomputers.in", "https://vanguard-united.com", "https://socketos.eu.org", "https://workseez.com", "https://jineshnagori.github.io/xccurate-security/", "https://jineshnagori.github.io/manorama/", "https://jineshnagori.github.io/akshatsingh.ml/", "https://github.com/jineshnagori/mad-music", "https://github.com/jineshnagori/FreeBookPost", "https://github.com/jineshnagori/easyRecharge"];
  const index = $(this).index();
  const url = urls[index];
  window.open(url, "_blank");
});