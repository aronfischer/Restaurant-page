const createLocationElements = function() {
  let locationSection = document.createElement("section");
  let locationGridContainer = document.createElement("div");
  locationGridContainer.classList.add("location-grid-container");
  locationSection.appendChild(locationGridContainer);

  const createLocationTab = function() {
    let contentArea = document.getElementById("content");
    locationSection.classList.add("location-sec");
    locationSection.style.display = "none";
    contentArea.appendChild(locationSection);
  };

  const createMap = function() {
    let divMap = document.createElement("div");
    divMap.setAttribute("id", "map");
    locationGridContainer.appendChild(divMap);
  };

  const createText = function() {
    let title = document.createElement("h3");
    let divTitle = document.createElement("h4");

    title.textContent = "Find Us!";
    divTitle.textContent = "We are excited about your visit!";
    locationGridContainer.appendChild(title);
    locationGridContainer.appendChild(divTitle);
  };

  const manageCreation = function() {
    createMap();
    createText();
    createLocationTab();
  };

  manageCreation();
};

const displayLocation = function() {
  if (!document.querySelector(".active-location")) {
    let locationTab = document.querySelector(".location-sec");
    locationTab.style.display = "none";
  } else {
    let locationTab = document.querySelector(".location-sec");
    locationTab.style.display = "block";
  }
};

export { createLocationElements, displayLocation };
