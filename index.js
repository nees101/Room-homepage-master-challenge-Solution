$(document).ready(function() {
  if (window.matchMedia("(max-width:768px)").matches) {
    // The viewport is less than 768px wide
    $(".hamburger-icon").on("click", function() {
      $(".hamburger-icon").css("display", "none");
      $(".close-icon").css("display", "block");
      $(".brand-icon").css("display", "none");
      $(".navbar").addClass("navbar-click");
    });
    $(".close-icon").on("click", function() {
      $(".hamburger-icon").css("display", "block");
      $(".close-icon").css("display", "none");
      $(".brand-icon").css("display", "block");
      $(".navbar").removeClass("navbar-click");
    });
  }

  var i = 0;
  $(".right-arrow-desktop, .right-arrow-mobile").on("click", function() {
    i++;
    changeSlide(i);
    if (i > 2) {
      i--;
    }
  });
  $(".left-arrow-desktop, .left-arrow-mobile").on("click", function() {
    i--;
    changeSlide(i);
    if (i < 0) {
      i++;
    }
  });

  function changeSlide(n) {
    switch (n) {
      case 0:
        $(".column_1").addClass("bg-1").removeClass("bg-2 , bg-3");
        $(".column_2").css("display", "block");
        $(".column_3 ,.column_4").css("display", "none");
        break;
      case 1:
        $(".column_1").addClass("bg-2").removeClass("bg-1 , bg-3");
        $(".column_2,.column_4").css("display", "none");
        $(".column_3").css("display", "block");
        break;
      case 2:
        $(".column_1").addClass("bg-3").removeClass("bg-1 , bg-2");
        $(".column_2, .column_3").css("display", "none");
        $(".column_4").css("display", "block");
        break;
      default:
        break;
    }
  }
});
