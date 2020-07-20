import $ from "jquery";

// hide menu on scroll down
export function headerHider() {
  window.onscroll = function () {
    scrollFunction();
  };

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
