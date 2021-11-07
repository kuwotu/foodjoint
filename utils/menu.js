const contentDiv = document.querySelector("#content");
const menuPageTextContainer = document.createElement("div");
const menuPageStartersTextH1 = document.createElement("h1");
const menuPageMainsTextH1 = document.createElement("h1");
const menuPageSidesTextH1 = document.createElement("h1");
const menuPageStartersTextp1 = document.createElement("p");
const menuPageStartersTextp2 = document.createElement("p");
const menuPageStartersTextp3 = document.createElement("p");
const menuPageStartersTextp4 = document.createElement("p");
const menuPageStartersTextp5 = document.createElement("p");
const menuPageMainsTextp1 = document.createElement("p");
const menuPageMainsTextp2 = document.createElement("p");
const menuPageMainsTextp3 = document.createElement("p");
const menuPageMainsTextp4 = document.createElement("p");
const menuPageMainsTextp5 = document.createElement("p");
const menuPageSidesTextp1 = document.createElement("p");
const menuPageSidesTextp2 = document.createElement("p");
const menuPageSidesTextp3 = document.createElement("p");
const menuPageSidesTextp4 = document.createElement("p");

menuPageStartersTextH1.textContent = "STARTERS";
menuPageStartersTextp1.textContent =
  "Kyle of Tongue oyster, pickled seaweed mignonette   £3 each | 18 ½ dozen";
menuPageStartersTextp2.textContent =
  "Allegra’s bread service, salted butter, green sauce   £3";
menuPageStartersTextp3.textContent =
  "Hazelnut choux, black garlic & preserved clementine   £3 each";
menuPageStartersTextp4.textContent =
  "Waldorf tarts, pickled walnut, Pevensey blue   £6";
menuPageStartersTextp5.textContent =
  "Blood pudding muffins, pickled jalapeño   £8";

menuPageMainsTextH1.textContent = "MAINS";
menuPageMainsTextp1.textContent =
  "Cornish monkfish, lobster stuffed cabbage & shellfish sauce £32";
menuPageMainsTextp2.textContent =
  "Aged middle white pork, barbequed carrot, blood pudding & fennel  £26";
menuPageMainsTextp3.textContent =
  "Roasted cep pain perdu pickled celeriac, confit yolk, potato & black garlic  £18";
menuPageMainsTextp4.textContent =
  "Peterhead cod, cooked en papillote, parmesan dumplings, wild mushroom & tarragon £28";
menuPageMainsTextp5.textContent =
  "Rib-eye of grass-fed beef (400g), grilled lettuce, tomato tarte tatin, smoked bone marrow sauce   £41";

menuPageSidesTextH1.textContent = "SIDES";

menuPageSidesTextp1.textContent =
  "Maris piper potatoes, salted butter & chives   £6.5";
menuPageSidesTextp2.textContent =
  "Market leaves, buttermilk & elderflower dressing fine herbs & shallot  £6";
menuPageSidesTextp3.textContent =
  "Fried potatoes, pickled onion, whole grain mustard   £6";
menuPageSidesTextp4.textContent = "Salt and peppered deep cut fries   £8";

menuPageTextContainer.classList.add("divElements");
menuPageTextContainer.id = "menuPageTextContainer";
menuPageTextContainer.append(menuPageStartersTextH1);
menuPageTextContainer.append(menuPageStartersTextp1);
menuPageTextContainer.append(menuPageStartersTextp2);
menuPageTextContainer.append(menuPageStartersTextp3);
menuPageTextContainer.append(menuPageStartersTextp4);
menuPageTextContainer.append(menuPageStartersTextp5);
menuPageTextContainer.append(menuPageMainsTextH1);
menuPageTextContainer.append(menuPageMainsTextp1);
menuPageTextContainer.append(menuPageMainsTextp2);
menuPageTextContainer.append(menuPageMainsTextp3);
menuPageTextContainer.append(menuPageMainsTextp4);
menuPageTextContainer.append(menuPageMainsTextp5);
menuPageTextContainer.append(menuPageSidesTextH1);
menuPageTextContainer.append(menuPageSidesTextp1);
menuPageTextContainer.append(menuPageSidesTextp2);
menuPageTextContainer.append(menuPageSidesTextp3);
menuPageTextContainer.append(menuPageSidesTextp4);

function menuTabSwitch(e) {
  var divElements = document.querySelectorAll(".divElements");
  for (var i = 0; i < divElements.length; i++) {
    divElements[i].parentNode.removeChild(divElements[i]);
  }

  currentPageImg.src = "./img/menu-food-on-table.jpg";
  contentDiv.append(menuPageTextContainer);
  e.preventDefault();
}

export { menuTabSwitch };
