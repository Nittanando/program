$(document).ready(function () {
  var pictureCount = $("#container__scene-1 img").length;
  var scrollResolution = 50;

  animatePage();

  function animatePage() {
    var currentScrollPosition = window.pageYOffset;
    var imageIndex = Math.round(currentScrollPosition / scrollResolution);

    if (imageIndex >= pictureCount) {
      imageIndex = pictureCount - 1; // Select last image
    }

    $("#container__scene-1 img").hide();
    $("#container__scene-1 img").eq(imageIndex).show();
  }

  $(window).bind("scroll", function () {
    animatePage();
  });
});
