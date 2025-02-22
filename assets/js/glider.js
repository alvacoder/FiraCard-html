window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 3,
    dots: "#dots",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});

window.addEventListener("load", function () {
  new Glider(document.querySelector(".gliderMobile"), {
    slidesToShow: 1,
    dots: "#dots",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
