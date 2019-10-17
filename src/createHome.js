// Create elements for Homepage

const createHomeElements = function() {
  let contentArea = document.getElementById("content");
  const createFirstViewPage = function() {
    let firstViewSection = document.createElement("section");
    firstViewSection.classList.add("first-view");
    contentArea.appendChild(firstViewSection);

    let scrollSign = document.createElement("i");
    scrollSign.classList.add("fas", "fa-chevron-down");
    firstViewSection.appendChild(scrollSign);
  };

  const createOurRestaurants = function() {
    let section = document.createElement("section");
    section.classList.add("our-restaurants-sec");
    contentArea.appendChild(section);

    let title = document.createElement("h3");
    title.textContent = "Our Restaurants";
    section.appendChild(title);

    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container-locations");
    section.appendChild(gridContainer);

    let locations = ["London", "New York", "Berlin"];
    let locationsImg = [
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/restaurant-690569_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/21/16/02/bar-1846137_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_1280.jpg"
    ];

    for (let i = 0; i < locations.length; i++) {
      let imgTitle = document.createElement("div");
      imgTitle.textContent = `Location ${locations[i]}`;
      gridContainer.appendChild(imgTitle);
    }

    for (let i = 0; i < locationsImg.length; i++) {
      let imageDiv = document.createElement("div");
      imageDiv.classList.add("image-container");
      imageDiv.classList.add("our-restaurants-img");
      gridContainer.appendChild(imageDiv);

      let restaurant = document.createElement("img");
      restaurant.setAttribute("src", `${locationsImg[i]}`);
      imageDiv.appendChild(restaurant);
    }
  };

  const createAboutUs = function() {
    let section = document.createElement("section");
    section.classList.add("about-us-sec");
    contentArea.appendChild(section);

    let aboutUsTitle = document.createElement("h3");
    aboutUsTitle.textContent = "About FatCow";
    section.appendChild(aboutUsTitle);

    let aboutUs = document.createElement("div");
    aboutUs.textContent = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
    Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer`;
    section.appendChild(aboutUs);
  };

  const createTestimonials = function() {
    let section = document.createElement("section");
    section.classList.add("testimonial-sec");
    contentArea.appendChild(section);

    let title = document.createElement("h3");
    title.textContent = "Our guests say about us";
    section.appendChild(title);

    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container-testimonials");
    section.appendChild(gridContainer);

    let testimonials = [
      "Great restaurant, great staff, great food, great vibes, always worth a visit",
      "One of my favorit restaurants in town",
      "My wife and I ate what I consider is the best steak I have ever eaten. The food was excellent, especially the Rib-Eye-Steak. The service was warm and efficient. This restaurant is a cut above the average and I would wholehearted recommend without any reservations whatsoever. Good pricing too.",
      "This is possibly the best Steak Restaurant we have ever been to. Food excellent. Service excellent. Ambience excellent. Enough said.",
      "We had lunch here a few times while in London visiting family and friends. The servers here are just wonderful and have great memories it seems. We sat on the window front and enjoyed the view with our delicious wine and lunch. Must try!"
    ];

    let testiPic = [
      "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/10/09/01/01/steak-978666_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/07/08/17/13/steak-2484999_1280.jpg"
    ];

    for (let i = 0; i < testimonials.length; i++) {
      let img = document.createElement("img");
      img.setAttribute("src", `${testiPic[i]}`);
      gridContainer.appendChild(img);

      let testimonial = document.createElement("div");
      testimonial.classList.add("testimonials");
      testimonial.textContent = `"${testimonials[i]}"`;
      gridContainer.appendChild(testimonial);
    }
  };

  const manageCreation = function() {
    createFirstViewPage();
    // createNavBar();
    createOurRestaurants();
    createAboutUs();
    createTestimonials();
  };
  manageCreation();
};

const createNavBar = function() {
  let firstViewSection = document.querySelector(".first-view");
  let navBar = document.createElement("nav");
  navBar.classList.add("nav-bar");
  firstViewSection.appendChild(navBar);

  const createNavElements = function() {
    let nav = document.createElement("ul");
    navBar.appendChild(nav);

    let home = document.createElement("li");
    let par1 = document.createElement("a"); // Link to other page
    par1.setAttribute("href", "index.html"); // Link to other page
    par1.setAttribute("id", "home");
    par1.textContent = "Home";
    home.appendChild(par1);
    nav.appendChild(home);

    let menu = document.createElement("li");
    let par2 = document.createElement("div"); // Link to other page
    // par2.setAttribute("href", "menu.html"); // Link to other page
    par2.setAttribute("id", "menu");
    par2.textContent = "Menu";
    menu.appendChild(par2);
    nav.appendChild(menu);

    let location = document.createElement("li");
    let par3 = document.createElement("div"); // Link to other page
    // par3.setAttribute("href", "location.html"); // Link to other page
    par3.setAttribute("id", "location");
    par3.textContent = "Location";
    location.appendChild(par3);
    nav.appendChild(location);

    let contact = document.createElement("li");
    let par4 = document.createElement("div"); // Link to other page
    // par4.setAttribute("href", "contact.html"); // Link to other page
    par4.setAttribute("id", "contact");
    par4.textContent = "Contact";
    contact.appendChild(par4);
    nav.appendChild(contact);
  };
  createNavElements();

  let body = document.querySelector("body");
  body.setAttribute("onscroll", scrollNav());

  function scrollNav() {
    navBar.style.backgroundColor = `rgba(0,0,0,0.7)`;
  }
};

export { createHomeElements, createNavBar };
