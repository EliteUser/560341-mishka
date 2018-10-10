/*
var navButton = document.querySelector(".main-navigation__toggle");
var navList = document.querySelector(".main-navigation__list");

document.querySelector("html").classList.remove("nojs");
navList.classList.remove("main-navigation__list--show");

navButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  navButton.classList.toggle("main-navigation__toggle--active");
  navList.classList.toggle("main-navigation__list--show");
});
*/

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
      iconImageHref: "../img/icon-map-pin.svg",
      iconImageSize: [67, 100],
      iconImageOffset: [-35, -90]
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
