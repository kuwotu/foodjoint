import { createNavbar } from "./navbar.js";

const contentDiv = document.querySelector("#content");
const homePageImgContainer = document.createElement("div");
const currentPageImg = document.createElement("img");
const homePageTextContainer = document.createElement("div");
const homePageTextH1 = document.createElement("h1");
const homePageTextp1 = document.createElement("p");
const homePageTextp2 = document.createElement("p");
const homePageTextp3 = document.createElement("p");

createNavbar();
currentPageImg.id = "currentPageImg";
currentPageImg.src = "./img/friends-eating-food-homepage.jpg";
currentPageImg.style.width = "537px";

homePageTextH1.textContent = "Welcome to Chef’s Kiss";
homePageTextp1.textContent =
  "Chef’s Kiss is a restaurant, bar and terrace on the 7th floor of Harrods, an extraordinary shopping centre in the heart of Knightsbridge.";
homePageTextp2.textContent =
  "Head Chef Gus Fring invites guests to embrace convivial dining from long, lazy lunches through to late-night dinners. Celebrating authentic hospitality with inventive dishes using local, seasonal ingredients, bringing an exceptional dining experience to Central London";
homePageTextp3.textContent =
  "Designed by Space Copenhagen (the team behind Noma) Chef’s Kiss’s interiors fuse cutting-edge style with cosy, old-world opulence which flows onto the Allegra terrace.";

homePageImgContainer.id = "homePageImgContainer";
homePageImgContainer.append(currentPageImg);

homePageTextContainer.classList.add("divElements");
homePageTextContainer.id = "homePageTextContainer";
homePageTextContainer.append(homePageTextH1);
homePageTextContainer.append(homePageTextp1);
homePageTextContainer.append(homePageTextp2);
homePageTextContainer.append(homePageTextp3);

function homePageTabSwitch(e) {
  var divElements = document.querySelectorAll(".divElements");
  for (var i = 0; i < divElements.length; i++) {
    divElements[i].parentNode.removeChild(divElements[i]);
  }
  currentPageImg.src = "./img/friends-eating-food-homepage.jpg";
  contentDiv.append(homePageImgContainer);
  contentDiv.append(homePageTextContainer);
  e.preventDefault();
}

export { homePageTabSwitch };
