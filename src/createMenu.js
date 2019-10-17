const createMenuElements = function() {
  let menuSection = document.createElement("section");
  const createMenuTab = function() {
    let contentArea = document.getElementById("content");
    menuSection.classList.add("menu-sec");
    menuSection.style.display = "none";
    contentArea.appendChild(menuSection);
  };

  const createOurMenu = function() {
    let menuGridContainer = document.createElement("div");
    menuGridContainer.classList.add("menu-grid-container");
    menuSection.appendChild(menuGridContainer);

    const createMenuTitle = function() {
      let menuTitle = document.createElement("h3");
      menuTitle.textContent = "Menu";
      menuGridContainer.appendChild(menuTitle);
    };
    createMenuTitle();

    const createDishes = function() {
      let dishes = [
        "Dish 1",
        "Dish 2",
        "Dish 3",
        "Dish 4",
        "Dish 5",
        "Dish 6",
        "Dish 7",
        "Dish 8",
        "Dish 9",
        "Dish 10"
      ];
      let descriptions = [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ];

      let legend = [
        "🌶: spicy",
        "🦀: contains shellfish",
        "🍋: high in vitamines",
        "🥬: vegan"
      ];

      for (let i = 0; i < dishes.length; i++) {
        let dish = document.createElement("div");
        let title = document.createElement("h4");
        let description = document.createElement("p");
        title.textContent = `${dishes[i]}`;
        description.textContent = `${descriptions[i]}`;
        dish.appendChild(title);
        dish.appendChild(description);
        menuGridContainer.appendChild(dish);
      }

      let legendDiv = document.createElement("div");
      let legendDivTitle = document.createElement("h4");
      legendDivTitle.textContent = "Legend:";
      legendDiv.appendChild(legendDivTitle);
      menuGridContainer.appendChild(legendDiv);

      for (let i = 0; i < legend.length; i++) {
        let sign = document.createElement("p");
        sign.textContent = `${legend[i]}`;
        legendDiv.appendChild(sign);
      }
    };
    createDishes();
  };

  const manageCreation = function() {
    createMenuTab();
    createOurMenu();
  };

  manageCreation();
};

const displayMenu = function() {
  if (!document.querySelector(".active-menu")) {
    let menuTab = document.querySelector(".menu-sec");
    menuTab.style.display = "none";
  } else {
    let menuTab = document.querySelector(".menu-sec");
    menuTab.style.display = "block";
  }
};

export { createMenuElements, displayMenu };
