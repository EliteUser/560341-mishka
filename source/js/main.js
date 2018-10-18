var navButton = document.querySelector(".main-navigation__toggle");
var navList = document.querySelector(".main-navigation__list");
var indexCart = document.querySelector("#order-button");
var catalog = document.querySelector(".catalog");
var cartModal = document.querySelector(".modal-cart");
var ymaps;

document.querySelector("html").classList.remove("nojs");
navList.classList.remove("main-navigation__list--show");

navButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  navButton.classList.toggle("main-navigation__toggle--active");
  navList.classList.toggle("main-navigation__list--show");
});

if (ymaps) {
  ymaps.ready(init);

  function init() {
    var mapContainer = document.querySelector("#mapContainer");
    mapContainer.classList.add("contacts__wrapper--js");

    var myMap = new ymaps.Map("map", {
      center: [59.93872477, 30.32311291],
      zoom: 17
    });

    var myPlacemark = new ymaps.Placemark([59.93872258, 30.32311351], {
        hintContent: "Mishka",
        balloonContent: "Mishka - Милые штуки ручной работы для дома"
      }, {
        iconLayout: "default#image",
        iconImageHref: "../img/map-pin-icon.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-35, -90]
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }
}

if (indexCart) {
  indexCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModal.classList.add("modal-cart--show");
  })
}

if (catalog) {
  catalog.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("product__cart")) {
      cartModal.classList.add("modal-cart--show");
    }
  })
}

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    cartModal.classList.remove("modal-cart--show");
  }
});

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("modal-cart")) {
    cartModal.classList.remove("modal-cart--show");
  }
});
