const createContactElements = function() {
  let contactSection = document.createElement("section");
  const createContactTab = function() {
    let contentArea = document.getElementById("content");
    contactSection.classList.add("contact-sec");
    contactSection.style.display = "none";
    contentArea.appendChild(contactSection);
  };

  const createContactForm = function() {
    let contactGridContainer = document.createElement("div");
    contactGridContainer.classList.add("contact-grid-container");
    let title = document.createElement("h3");
    title.textContent = "Contact Us!";
    contactGridContainer.appendChild(title);
    contactSection.appendChild(contactGridContainer);

    const createInputs = function() {
      let labelSubject = document.createElement("label");
      let inputSubject = document.createElement("input");
      inputSubject.setAttribute("type", "text");
      labelSubject.textContent = "Subject (required):";
      labelSubject.appendChild(inputSubject);
      contactGridContainer.appendChild(labelSubject);

      let labelEmail = document.createElement("label");
      let inputEmail = document.createElement("input");
      inputEmail.setAttribute("type", "email");
      labelEmail.textContent = "E-mail (required):";
      labelEmail.appendChild(inputEmail);
      contactGridContainer.appendChild(labelEmail);

      let labelMessage = document.createElement("label");
      let inputMessage = document.createElement("textarea");
      // inputMessage.setAttribute("type", "textarea");
      inputMessage.setAttribute("rows", "10");
      labelMessage.textContent = "How can we help you? (required):";
      labelMessage.appendChild(inputMessage);
      contactGridContainer.appendChild(labelMessage);
    };
    createInputs();
  };

  const manageCreation = function() {
    createContactTab();
    createContactForm();
  };

  manageCreation();
};

const displayContact = function() {
  if (!document.querySelector(".active-contact")) {
    let contactTab = document.querySelector(".contact-sec");
    contactTab.style.display = "none";
  } else {
    let contactTab = document.querySelector(".contact-sec");
    contactTab.style.display = "block";
  }
};

export { createContactElements, displayContact };
