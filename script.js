$(document).ready(function () {
  $("#topheader .navbar-nav a").on("click", function () {
    $("#topheader .navbar-nav").find("li.active-header").removeClass("active-header");
    $(this).parent("li").addClass("active-header");
  });
});

$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

