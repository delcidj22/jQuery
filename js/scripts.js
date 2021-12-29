jQuery("h1").click(function () {
  alert("This is a heading.");
});

jQuery("p").click(function () {
  alert("This is a paragraph.");
});

jQuery("img").click(function () {
  alert("This is an image.");
});

$(document).ready(function () {
  $(".clickable").click(function () {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
});
