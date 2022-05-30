// filterizer

$(document).ready(function () {
  var containerEl = document.querySelector(".filtr-container");
  var filterizd;
  if (containerEl) {
    filterizd = $(".filtr-container").filterizr({});
  }
  //Active changer
  $(".filter-controls li").on("click", function () {
    $(".filter-controls li").removeClass("active");
    $(this).addClass("active");
  });
});

// light gallery intializer

lightGallery(document.getElementById("lightgallery"));
