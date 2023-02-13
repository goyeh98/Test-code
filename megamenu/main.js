$("#navbar .navbar-nav a").on("click", function () {
  $("#navbar .navbar-nav").find("li.active").removeClass("active");
  $(this).parent("li").addClass("active");
});

$(".swiper-prod").hover(
  function () {
    this.swiper.autoplay.stop();
  },
  function () {
    this.swiper.autoplay.start();
  }
);
