const contentDiv = document.querySelector("#content");

// container for information text
const barAndTerracePageTextContainer = document.createElement("div");

// container whole wine and drinks section
const barAndTerraceWineAndDrinksContainer = document.createElement("div");

//container for wine and drinks tab
const barAndTerraceWineAndDrinksTabContainer = document.createElement("div");

// page information text
const barAndTerracePageTextH1 = document.createElement("h1");
const barAndTerracePageIntroTextp1 = document.createElement("p");
const barAndTerracePageIntroTextp2 = document.createElement("p");
const barAndTerracePageIntroTextp3 = document.createElement("p");
const barAndTerracePageIntroTextp4 = document.createElement("p");

// drinks and wine tabs
const barAndTerraceWineListTabTitle = document.createElement("a");
const barAndTerraceDrinksListTabTitle = document.createElement("a");

// drinks containers and p tags
const barAndTerraceDrinksListContainer0 = document.createElement("div");
const barAndTerraceDrinksListContainer1 = document.createElement("div");
const barAndTerraceDrinksListContainer2 = document.createElement("div");
const barAndTerraceDrinksListContainer3 = document.createElement("div");
const barAndTerraceDrinksListContainer4 = document.createElement("div");
const barAndTerraceDrinksListContainer5 = document.createElement("div");
const barAndTerraceDrinksListContainer6 = document.createElement("div");
const barAndTerraceDrinksListContainer7 = document.createElement("div");
const barAndTerraceDrinksListContainer8 = document.createElement("div");
const barAndTerraceDrinksListContainer0p1 = document.createElement("p");
const barAndTerraceDrinksListContainer1p1 = document.createElement("p");
const barAndTerraceDrinksListContainer1p2 = document.createElement("p");
const barAndTerraceDrinksListContainer2p1 = document.createElement("p");
const barAndTerraceDrinksListContainer2p2 = document.createElement("p");
const barAndTerraceDrinksListContainer3p1 = document.createElement("p");
const barAndTerraceDrinksListContainer3p2 = document.createElement("p");
const barAndTerraceDrinksListContainer4p1 = document.createElement("p");
const barAndTerraceDrinksListContainer4p2 = document.createElement("p");
const barAndTerraceDrinksListContainer5p1 = document.createElement("p");
const barAndTerraceDrinksListContainer5p2 = document.createElement("p");
const barAndTerraceDrinksListContainer6p1 = document.createElement("p");
const barAndTerraceDrinksListContainer6p2 = document.createElement("p");
const barAndTerraceDrinksListContainer7p1 = document.createElement("p");
const barAndTerraceDrinksListContainer7p2 = document.createElement("p");
const barAndTerraceDrinksListContainer8p1 = document.createElement("p");
const barAndTerraceDrinksListContainer8p2 = document.createElement("p");

// wine containers and p tags
const wineListContainer0 = document.createElement("div");
const wineListContainer0p1 = document.createElement("p");
const wineListContainer1 = document.createElement("div");
const wineListContainer1p1 = document.createElement("p");
const wineListContainer2 = document.createElement("div");
const wineListContainer2p1 = document.createElement("p");
const wineListContainer2p2 = document.createElement("p");
const wineListContainer2p3 = document.createElement("p");
const wineListContainer2p4 = document.createElement("p");
const wineListContainer3 = document.createElement("div");
const wineListContainer3p1 = document.createElement("p");
const wineListContainer3p2 = document.createElement("p");
const wineListContainer3p3 = document.createElement("p");
const wineListContainer3p4 = document.createElement("p");
const wineListContainer3p5 = document.createElement("p");
const wineListContainer4 = document.createElement("div");
const wineListContainer4p1 = document.createElement("p");
const wineListContainer4p2 = document.createElement("p");
const wineListContainer4p3 = document.createElement("p");
const wineListContainer4p4 = document.createElement("p");
const wineListContainer4p5 = document.createElement("p");
const wineListContainer4p6 = document.createElement("p");
const wineListContainer5 = document.createElement("div");
const wineListContainer5p1 = document.createElement("p");
const wineListContainer5p2 = document.createElement("p");
const wineListContainer5p3 = document.createElement("p");
const wineListContainer6 = document.createElement("div");
const wineListContainer6p1 = document.createElement("p");
const wineListContainer6p2 = document.createElement("p");
const wineListContainer6p3 = document.createElement("p");
const wineListContainer6p4 = document.createElement("p");
const wineListContainer6p5 = document.createElement("p");

barAndTerracePageTextH1.textContent = "Bar and Terrace";
barAndTerracePageIntroTextp1.textContent =
  "Wednesday - Thursday: 4pm-11pm, Friday - Saturday: 12pm-2.30pm & 6-11pm, Sunday: 12pm-4pm";
barAndTerracePageIntroTextp2.textContent =
  "Guests are welcomed by an elegant bar which features a dining counter showcasing the chef and bar team. Allegra’s bar offers an extensive list of Champagne, wine and cocktails along with a snack menu offering you an introduction into Patrick’s food.";
barAndTerracePageIntroTextp3.textContent =
  "Allegra's terrace is our intimate, outdoor dining space set amongst an elevated meadow of wildflowers, water features and cedar pathways and sheltered under a spectacular, cedar-cantilevered roof. The terrace offers sharing dishes and small plates from a more casual menu exploring the Sky Terrace overlooking the London skyline.";
barAndTerracePageIntroTextp4.textContent =
  "Walk-ins are welcome to our Bar & Terrace.";

barAndTerraceWineListTabTitle.textContent = "Wine List";
barAndTerraceDrinksListTabTitle.textContent = "Drinks List";
barAndTerraceWineListTabTitle.href = "#";
barAndTerraceDrinksListTabTitle.href = "#";
barAndTerraceWineAndDrinksTabContainer.append(barAndTerraceWineListTabTitle);
barAndTerraceWineAndDrinksTabContainer.append(barAndTerraceDrinksListTabTitle);

function drinksList() {
  barAndTerraceDrinksListContainer0p1.textContent = "Drink List";
  barAndTerraceDrinksListContainer0.append(barAndTerraceDrinksListContainer0p1);

  barAndTerraceDrinksListContainer1p1.textContent = "Signature Cocktails";
  barAndTerraceDrinksListContainer1p2.textContent = "£12";
  barAndTerraceDrinksListContainer1.append(barAndTerraceDrinksListContainer1p1);
  barAndTerraceDrinksListContainer1.append(barAndTerraceDrinksListContainer1p2);

  barAndTerraceDrinksListContainer2p1.textContent = "Tonico";
  barAndTerraceDrinksListContainer2p2.textContent =
    "Star of Bombay gin, grapefruit, Campari & chilli";
  barAndTerraceDrinksListContainer2.append(barAndTerraceDrinksListContainer2p1);
  barAndTerraceDrinksListContainer2.append(barAndTerraceDrinksListContainer2p2);

  barAndTerraceDrinksListContainer3p1.textContent = "Wrong Blanco";
  barAndTerraceDrinksListContainer3p2.textContent =
    "Allegra’s dry vermouth blend, Luxardo Bianco, Pet Nat prosecco & bitters";
  barAndTerraceDrinksListContainer3.append(barAndTerraceDrinksListContainer3p1);
  barAndTerraceDrinksListContainer3.append(barAndTerraceDrinksListContainer3p2);

  barAndTerraceDrinksListContainer4p1.textContent = "Wild Side";
  barAndTerraceDrinksListContainer4p2.textContent =
    "Pear cider, Noilly Prat, Calvados, elderflower & bitters";
  barAndTerraceDrinksListContainer4.append(barAndTerraceDrinksListContainer4p1);
  barAndTerraceDrinksListContainer4.append(barAndTerraceDrinksListContainer4p2);

  barAndTerraceDrinksListContainer5p1.textContent = "East Side";
  barAndTerraceDrinksListContainer5p2.textContent =
    "Altos tequila, cucumber, lemon balm, honey & lime";
  barAndTerraceDrinksListContainer5.append(barAndTerraceDrinksListContainer5p1);
  barAndTerraceDrinksListContainer5.append(barAndTerraceDrinksListContainer5p2);

  barAndTerraceDrinksListContainer6p1.textContent = "Three Teas";
  barAndTerraceDrinksListContainer6p2.textContent =
    "Bacardi 8 rum, three black teas, orgeat, lime & peach";
  barAndTerraceDrinksListContainer6.append(barAndTerraceDrinksListContainer6p1);
  barAndTerraceDrinksListContainer6.append(barAndTerraceDrinksListContainer6p2);

  barAndTerraceDrinksListContainer7p1.textContent = "The 7th Garden";
  barAndTerraceDrinksListContainer7p2.textContent =
    "Grey Goose vodka, pickled ginger, chamomile, prosecco & lemon";
  barAndTerraceDrinksListContainer7.append(barAndTerraceDrinksListContainer7p1);
  barAndTerraceDrinksListContainer7.append(barAndTerraceDrinksListContainer7p2);

  barAndTerraceDrinksListContainer8p1.textContent = "The Orchardist";
  barAndTerraceDrinksListContainer8p2.textContent =
    "Lot 40 rye whisky, red flesh apple, Tio Pepe sherry & Fernet Branca";
  barAndTerraceDrinksListContainer8.append(barAndTerraceDrinksListContainer8p1);
  barAndTerraceDrinksListContainer8.append(barAndTerraceDrinksListContainer8p2);

  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer0);
  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer1);
  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer2);
  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer3);
  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer4);
  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer5);
  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer6);
  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer7);
  barAndTerraceWineAndDrinksContainer.append(barAndTerraceDrinksListContainer8);
}

function wineList() {
  wineListContainer0p1.textContent = "Wine List";
  wineListContainer0.append(wineListContainer0p1);

  wineListContainer1p1.textContent = "By the glass";
  wineListContainer1.append(wineListContainer1p1);

  wineListContainer2p1.textContent = "Sparkling & Champagne";
  wineListContainer2p2.textContent =
    "NV Prosecco Frizzante, Toffoli, Italy   8";
  wineListContainer2p3.textContent = "NV Wiston Estate, Sussex, England   12";
  wineListContainer2p4.textContent = "NV Perrier-Joüet Grand Brut, France   15";
  wineListContainer2.append(wineListContainer2p1);
  wineListContainer2.append(wineListContainer2p2);
  wineListContainer2.append(wineListContainer2p3);
  wineListContainer2.append(wineListContainer2p4);

  wineListContainer3p1.textContent = "White";
  wineListContainer3p2.textContent =
    "2019 Vihno Verde Reserva, Quinta de Azevedo, Portugal   8";
  wineListContainer3p3.textContent =
    "2019 Gruener Veltliner, ‘Federspield’, Wachau, Austria   10";
  wineListContainer3p4.textContent =
    "2020 Assyritko ‘Chora’,Ariousios, Chios, Greece   11";
  wineListContainer3p5.textContent =
    "2017  Chardonnay - Sauvignon, Marof, Prekmurje, Slovenia   12";
  wineListContainer3.append(wineListContainer3p1);
  wineListContainer3.append(wineListContainer3p2);
  wineListContainer3.append(wineListContainer3p3);
  wineListContainer3.append(wineListContainer3p4);
  wineListContainer3.append(wineListContainer3p5);

  wineListContainer4p1.textContent = "Red";
  wineListContainer4p2.textContent =
    "2018 Marcillac,’Lo Sang del Pais’, Domaine du Cros, France   8";
  wineListContainer4p3.textContent =
    "2019 Xinomavro, Thymiopoulos, Naoussa, Greece   10";
  wineListContainer4p4.textContent =
    "2019 Carmenere, Primus, Colchagua, Chile   11";
  wineListContainer4p5.textContent =
    "2013 Etna Rosso, I Custodi delle Vigne dell’Etna, Sicily, Italy   12";
  wineListContainer4p6.textContent =
    "2016 Cabernet Sauvignon, Castilo Perelada, Emporda, Spain   15";
  wineListContainer4.append(wineListContainer4p1);
  wineListContainer4.append(wineListContainer4p2);
  wineListContainer4.append(wineListContainer4p3);
  wineListContainer4.append(wineListContainer4p4);
  wineListContainer4.append(wineListContainer4p5);
  wineListContainer4.append(wineListContainer4p6);

  wineListContainer5p1.textContent = "Rosé and Orange";
  wineListContainer5p2.textContent =
    "2018 Aix Rosé, Côteaux de Provence, France   10";
  wineListContainer5p3.textContent =
    "2012 Chardonnay-Viogner ‘Blonde’, Andrea Calek, Rhone, France   12";
  wineListContainer5.append(wineListContainer5p1);
  wineListContainer5.append(wineListContainer5p2);
  wineListContainer5.append(wineListContainer5p3);

  wineListContainer6p1.textContent = "Beer and Cider";
  wineListContainer6p2.textContent = "Redchurch Stratford Pilsner, 4.0%   5";
  wineListContainer6p3.textContent =
    "Redchurch Bethnal Green Pale Ale, 5.5%   5";
  wineListContainer6p4.textContent =
    "2015 Disco Pils, 40FT Brewery, Dalston, 4.8%   5.5";
  wineListContainer6p5.textContent =
    "Oliver’s Cider, Pomona Season 2019, 6.5%   5.5";
  wineListContainer6.append(wineListContainer6p1);
  wineListContainer6.append(wineListContainer6p2);
  wineListContainer6.append(wineListContainer6p3);
  wineListContainer6.append(wineListContainer6p4);
  wineListContainer6.append(wineListContainer6p5);

  barAndTerraceWineAndDrinksContainer.append(wineListContainer0);
  barAndTerraceWineAndDrinksContainer.append(wineListContainer1);
  barAndTerraceWineAndDrinksContainer.append(wineListContainer2);
  barAndTerraceWineAndDrinksContainer.append(wineListContainer3);
  barAndTerraceWineAndDrinksContainer.append(wineListContainer4);
  barAndTerraceWineAndDrinksContainer.append(wineListContainer5);
  barAndTerraceWineAndDrinksContainer.append(wineListContainer6);
}

barAndTerracePageTextContainer.classList.add("divElements");
barAndTerracePageTextContainer.append(barAndTerracePageTextH1);
barAndTerracePageTextContainer.append(barAndTerracePageIntroTextp1);
barAndTerracePageTextContainer.append(barAndTerracePageIntroTextp2);
barAndTerracePageTextContainer.append(barAndTerracePageIntroTextp3);
barAndTerracePageTextContainer.append(barAndTerracePageIntroTextp4);

barAndTerraceWineAndDrinksContainer.classList.add("divElements");
barAndTerraceWineAndDrinksContainer.append(
  barAndTerraceWineAndDrinksTabContainer
);

barAndTerraceDrinksListContainer0.classList.add("drinksItems");
barAndTerraceDrinksListContainer1.classList.add("drinksItems");
barAndTerraceDrinksListContainer2.classList.add("drinksItems");
barAndTerraceDrinksListContainer3.classList.add("drinksItems");
barAndTerraceDrinksListContainer4.classList.add("drinksItems");
barAndTerraceDrinksListContainer5.classList.add("drinksItems");
barAndTerraceDrinksListContainer6.classList.add("drinksItems");
barAndTerraceDrinksListContainer7.classList.add("drinksItems");
barAndTerraceDrinksListContainer8.classList.add("drinksItems");

wineListContainer0.classList.add("wineItems");
wineListContainer1.classList.add("wineItems");
wineListContainer2.classList.add("wineItems");
wineListContainer3.classList.add("wineItems");
wineListContainer4.classList.add("wineItems");
wineListContainer5.classList.add("wineItems");
wineListContainer6.classList.add("wineItems");

wineList();

function showWineSelection() {
  var drinksItems = document.querySelectorAll(".drinksItems");
  for (let i = 0; i < drinksItems.length; i++) {
    drinksItems[i].parentNode.removeChild(drinksItems[i]);
  }
  wineList();
}

function showDrinksSelection() {
  var wineItems = document.querySelectorAll(".wineItems");
  for (let i = 0; i < wineItems.length; i++) {
    wineItems[i].parentNode.removeChild(wineItems[i]);
  }
  drinksList();
}

barAndTerraceWineListTabTitle.addEventListener("click", showWineSelection);
barAndTerraceDrinksListTabTitle.addEventListener("click", showDrinksSelection);

function barAndTerraceTabSwitch() {
  var divElements = document.querySelectorAll(".divElements");
  for (var i = 0; i < divElements.length; i++) {
    divElements[i].parentNode.removeChild(divElements[i]);
  }
  currentPageImg.src = "../src/img/matthieu-joannon-6ciLddToTgM-unsplash.jpg";
  contentDiv.append(barAndTerracePageTextContainer);
  contentDiv.append(barAndTerraceWineAndDrinksContainer);
}

export { barAndTerraceTabSwitch };
