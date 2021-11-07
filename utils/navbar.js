import { homePageTabSwitch } from "./homepage.js";
import { menuTabSwitch } from "./menu.js";
import { barAndTerraceTabSwitch } from "./bar-and-terrace.js";
import { aboutUsTabSwitch } from "./about-us.js";

function createNavbar() {
  const contentDiv = document.querySelector("#content");
  const header = document.createElement("header");
  const navbar = document.createElement("nav");
  const ul1 = document.createElement("ul");
  const ul2 = document.createElement("ul");
  const ul3 = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const menuLink = document.createElement("a");
  const barAndTerraceLink = document.createElement("a");
  const aboutUsLink = document.createElement("a");
  const logoImgContainer = document.createElement("div");
  const logoImg = document.createElement("img");

  menuLink.textContent = "Menu";
  menuLink.href = "#";
  menuLink.addEventListener("click", menuTabSwitch);

  barAndTerraceLink.textContent = "Bar And Terrace";
  barAndTerraceLink.href = "#";
  barAndTerraceLink.addEventListener("click", barAndTerraceTabSwitch);

  aboutUsLink.textContent = "About Us";
  aboutUsLink.href = "#";
  aboutUsLink.addEventListener("click", aboutUsTabSwitch);

  logoImg.src = "..dist/img/chefs-kiss-logo.png";
  logoImg.style.width = "100px";
  logoImg.id = "logoImg";
  logoImgContainer.append(logoImg);
  logoImgContainer.addEventListener("click", homePageTabSwitch);

  navbar.id = "navbar";
  navbar.append(logoImgContainer);
  navbar.append(ul1);
  ul1.append(li1);
  li1.append(menuLink);

  navbar.append(ul2);
  ul2.append(li2);
  li2.append(barAndTerraceLink);

  navbar.append(ul3);
  ul3.append(li3);
  li3.append(aboutUsLink);

  header.append(navbar);
  contentDiv.append(header);
}

export { createNavbar };
