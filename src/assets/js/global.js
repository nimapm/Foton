import $ from "jquery";

// hide menu on scroll down
function headerHider() {
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    scrollFunction();
    mobilescrolled();
  };

  // laptop scroll
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-70px";
    }
  }

  // mobile scroll
  function mobilescrolled() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("mobile-header").style.top = "0";
    } else {
      document.getElementById("mobile-header").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  }
}

// search box controller
$(document).ready(function () {
  // open search
  $(".search-btn").click(function () {
    $(".main-search-box").fadeIn();
  });

  // close search
  $(".search-box-close-icon").click(function () {
    $(".main-search-box").fadeOut();
  });
});

// side bar controller
$(document).ready(function () {
  // open search
  $(".side-bar-svg").click(function () {
    $(".side-bar").css("right", "-500px").animate({
      right: "0",
    });
  });

  // close search
  $(".side-bar-close").click(function () {
    $(".side-bar").css("right", "0px").animate({
      right: "-500px",
    });
  });
});

export { headerHider };
