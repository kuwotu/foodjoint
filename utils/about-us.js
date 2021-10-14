const contentDiv = document.querySelector("#content");
const aboutUsPageTextContainer = document.createElement("div");
const aboutUsPageTextH1 = document.createElement("h1");
const aboutUsPageIntroTextp1 = document.createElement("p");
const aboutUsPageIntroTextp2 = document.createElement("p");
const aboutUsPageIntroTextp3 = document.createElement("p");

const aboutUsLocationsContainer = document.createElement("div");
const aboutUsLocationsHeadingContainer = document.createElement("div");
const aboutUsLocationsH1 = document.createElement("h1");

const aboutUsAddress1Container = document.createElement("div");
const aboutUsAddress1Line1 = document.createElement("p");
const aboutUsAddress1Line2 = document.createElement("p");
const aboutUsAddress1Line3 = document.createElement("p");
const aboutUsAddress1Days = document.createElement("p");
const aboutUsAddress1Times = document.createElement("p");
const aboutUsLocationImage1Container = document.createElement("div");
const aboutUsLocationImage1 = document.createElement("img");
const aboutUsLocationAndImageContainer1 = document.createElement("div");

const aboutUsAddress2Container = document.createElement("div");
const aboutUsAddress2Line1 = document.createElement("p");
const aboutUsAddress2Line2 = document.createElement("p");
const aboutUsAddress2Line3 = document.createElement("p");
const aboutUsAddress2Days = document.createElement("p");
const aboutUsAddress2Times = document.createElement("p");
const aboutUsLocationImage2Container = document.createElement("div");
const aboutUsLocationImage2 = document.createElement("img");
const aboutUsLocationAndImageContainer2 = document.createElement("div");

const aboutUsAddress3Container = document.createElement("div");
const aboutUsAddress3Line1 = document.createElement("p");
const aboutUsAddress3Line2 = document.createElement("p");
const aboutUsAddress3Line3 = document.createElement("p");
const aboutUsAddress3Days = document.createElement("p");
const aboutUsAddress3Times = document.createElement("p");
const aboutUsLocationImage3Container = document.createElement("div");
const aboutUsLocationImage3 = document.createElement("img");
const aboutUsLocationAndImageContainer3 = document.createElement("div");

aboutUsPageTextH1.textContent = "About Us";
aboutUsPageIntroTextp1.textContent =
  "One afternoon in 1987, two friends went for lunch at a humble Portuguese eatery. As their meal drew to a close, they knew they’d tasted something that had to be shared. PERi-PERi was about to make one more journey – from Rosettenville to the world.";
aboutUsPageIntroTextp2.textContent =
  "Fernando Duarte & Robbie Brozin get stuck into PERi-PERi marinated chicken in Johannesburg and decide never to let go.";
aboutUsPageIntroTextp3.textContent =
  "Nando's UK opens its 40th restaurant. We realise we're on a bit of a roll now.";

aboutUsPageTextContainer.classList.add("divElements");
aboutUsPageTextContainer.append(aboutUsPageTextH1);
aboutUsPageTextContainer.append(aboutUsPageIntroTextp1);
aboutUsPageTextContainer.append(aboutUsPageIntroTextp2);
aboutUsPageTextContainer.append(aboutUsPageIntroTextp3);

aboutUsLocationsH1.textContent = "Locations";
aboutUsLocationsHeadingContainer.append(aboutUsLocationsH1);

aboutUsAddress1Line1.textContent = "Brewer St - Soho";
aboutUsAddress1Line2.textContent = "84 Brewer St";
aboutUsAddress1Line3.textContent = "London W1F 9UB";
aboutUsAddress1Days.textContent = "Monday - Sunday";
aboutUsAddress1Times.textContent = "11am - 1am";
aboutUsLocationImage1.src = "../src/img/sohoChefsKiss.jpg";
aboutUsLocationImage1.style.width = "314px";

aboutUsAddress2Line1.textContent = "Paddington";
aboutUsAddress2Line2.textContent = "31 Paddington St";
aboutUsAddress2Line3.textContent = "London W1U 4HD";
aboutUsAddress2Days.textContent = "Monday - Saturday";
aboutUsAddress2Times.textContent = "10am - 11pm";
aboutUsLocationImage2.src = "../src/img/paddingtonChefsKiss.jpg";
aboutUsLocationImage2.style.width = "314px";

aboutUsAddress3Line1.textContent = "Chiswick";
aboutUsAddress3Line2.textContent = "148 Chiswick High Rd";
aboutUsAddress3Line3.textContent = "London W4 1PR";
aboutUsAddress3Days.textContent = "Monday - Sunday";
aboutUsAddress3Times.textContent = "12pm - 1am";
aboutUsLocationImage3.src = "../src/img/camdenChefsKiss.jpg";
aboutUsLocationImage3.style.width = "314px";

aboutUsLocationImage1Container.append(aboutUsLocationImage1);
aboutUsLocationImage2Container.append(aboutUsLocationImage2);
aboutUsLocationImage3Container.append(aboutUsLocationImage3);

aboutUsAddress1Container.append(aboutUsAddress1Line1);
aboutUsAddress1Container.append(aboutUsAddress1Line2);
aboutUsAddress1Container.append(aboutUsAddress1Line3);
aboutUsAddress1Container.append(aboutUsAddress1Days);
aboutUsAddress1Container.append(aboutUsAddress1Times);

aboutUsAddress2Container.append(aboutUsAddress2Line1);
aboutUsAddress2Container.append(aboutUsAddress2Line2);
aboutUsAddress2Container.append(aboutUsAddress2Line3);
aboutUsAddress2Container.append(aboutUsAddress2Days);
aboutUsAddress2Container.append(aboutUsAddress2Times);

aboutUsAddress3Container.append(aboutUsAddress3Line1);
aboutUsAddress3Container.append(aboutUsAddress3Line2);
aboutUsAddress3Container.append(aboutUsAddress3Line3);
aboutUsAddress3Container.append(aboutUsAddress3Days);
aboutUsAddress3Container.append(aboutUsAddress3Times);

aboutUsLocationAndImageContainer1.append(aboutUsAddress1Container);
aboutUsLocationAndImageContainer1.append(aboutUsLocationImage1Container);

aboutUsLocationAndImageContainer2.append(aboutUsAddress2Container);
aboutUsLocationAndImageContainer2.append(aboutUsLocationImage2Container);

aboutUsLocationAndImageContainer3.append(aboutUsAddress3Container);
aboutUsLocationAndImageContainer3.append(aboutUsLocationImage3Container);

aboutUsLocationsContainer.classList.add("divElements");
aboutUsLocationsContainer.append(aboutUsLocationAndImageContainer1);
aboutUsLocationsContainer.append(aboutUsLocationAndImageContainer2);
aboutUsLocationsContainer.append(aboutUsLocationAndImageContainer3);

function aboutUsTabSwitch() {
  var divElements = document.querySelectorAll(".divElements");
  for (var i = 0; i < divElements.length; i++) {
    divElements[i].parentNode.removeChild(divElements[i]);
  }
  currentPageImg.src = "../src/img/max-delsid-0geTqSZ76Xg-unsplash.jpg";
  contentDiv.append(aboutUsPageTextContainer);
  contentDiv.append(aboutUsLocationsContainer);
}

export { aboutUsTabSwitch };
