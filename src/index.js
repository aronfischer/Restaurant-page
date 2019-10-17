import { createHomeElements, createNavBar } from "./createHome.js";
import { createMenuElements, displayMenu } from "./createMenu";
import { createLocationElements, displayLocation } from "./createLocation";
import { createContactElements, displayContact } from "./createContact";

createLocationElements();
createHomeElements();
createNavBar();
createMenuElements();
createContactElements();

document.getElementById("menu").addEventListener("click", function(e) {
  if (
    document.getElementById("content").classList.contains("active-location")
  ) {
    document.getElementById("content").classList.toggle("active-location");
    document.getElementById("location").classList.toggle("active-border");
    displayLocation();
  }

  if (document.getElementById("content").classList.contains("active-contact")) {
    document.getElementById("content").classList.toggle("active-contact");
    document.getElementById("contact").classList.toggle("active-border");
    displayContact();
  }

  if (e.target) {
    document.getElementById("content").classList.toggle("active-menu");
    document.getElementById("menu").classList.toggle("active-border");
    displayMenu();
  }
});

document.getElementById("location").addEventListener("click", function(e) {
  if (document.getElementById("content").classList.contains("active-menu")) {
    document.getElementById("content").classList.toggle("active-menu");
    document.getElementById("menu").classList.toggle("active-border");
    displayMenu();
  }

  if (document.getElementById("content").classList.contains("active-contact")) {
    document.getElementById("content").classList.toggle("active-contact");
    document.getElementById("contact").classList.toggle("active-border");
    displayContact();
  }

  if (e.target) {
    document.getElementById("content").classList.toggle("active-location");
    document.getElementById("location").classList.toggle("active-border");
    displayLocation();
    // document.getElementById("map").classList.toggle("hidden");
  }
});

document.getElementById("contact").addEventListener("click", function(e) {
  if (document.getElementById("content").classList.contains("active-menu")) {
    document.getElementById("content").classList.toggle("active-menu");
    document.getElementById("menu").classList.toggle("active-border");
    displayMenu();
  }

  if (
    document.getElementById("content").classList.contains("active-location")
  ) {
    document.getElementById("content").classList.toggle("active-location");
    document.getElementById("location").classList.toggle("active-border");
    displayLocation();
  }

  if (e.target) {
    document.getElementById("content").classList.toggle("active-contact");
    document.getElementById("contact").classList.toggle("active-border");
    displayContact();
  }
});

window.addEventListener("mouseup", function() {
  let boxes = ["menu-sec", "location-sec", "contact-sec"];
  let navElem = ["menu", "location", "contact"];
  for (let i = 0; i < boxes.length; i++) {
    let box = document.querySelector(`.${boxes[i]}`);
    let allDescendents = box.querySelectorAll("*");
    allDescendents.forEach(elem => elem.classList.add("no-close"));
    if (
      event.target != box &&
      !event.target.classList.contains("no-close")
      // How to select the google maps API????????
    ) {
      box.style.display = "none";

      if (document.getElementById("menu").classList.contains("active-border")) {
        document.getElementById("menu").classList.remove("active-border");
      }
      if (
        document.getElementById("location").classList.contains("active-border")
      ) {
        document.getElementById("location").classList.remove("active-border");
      }
      if (
        document.getElementById("contact").classList.contains("active-border")
      ) {
        document.getElementById("contact").classList.remove("active-border");
      }

      if (
        document.getElementById("content").classList.contains("active-menu")
      ) {
        document.getElementById("content").classList.remove("active-menu");
      }

      if (
        document.getElementById("content").classList.contains("active-location")
      ) {
        document.getElementById("content").classList.remove("active-location");
      }

      if (
        document.getElementById("content").classList.contains("active-contact")
      ) {
        document.getElementById("content").classList.remove("active-contact");
      }
    }
  }
});
