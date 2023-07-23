window.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const blue = document.getElementById("blue-border-circle");
  const button = document.getElementById("make-circle-blue");
  button.addEventListener("click", () => {
    blue.className = "blue-fill";
  });

  const will = document.getElementById("will-not-check");
  will.addEventListener("click", (e) => {
    e.preventDefault();
  });
  const changeStatus = document.getElementById("change-bananas-status");
  const bananasDiv = document.getElementById("bananas-div");
  const bananasImg = document.getElementById("bananas-image-div");
  changeStatus.addEventListener("click", (e) => {
    bananasDiv.innerHTML = "No Bananas Today!";
    console.log();
    const img = document.createElement("img");
    img.src = "./images/no-bananas.png";
    bananasImg.appendChild(img);
    if (bananasImg.childNodes.length > 2) bananasImg.removeChild(img);
  });

  const fav = document.getElementById("fav-cookie");
  const storeCookie = document.getElementById("store-cookie");
  if (document.cookie) {
    const cookieVal = document.cookie.split("; ")[0].split("=")[1];
    fav.value = cookieVal;
  }
  storeCookie.addEventListener("click", (e) => {
    document.cookie = `favCookie=${fav.value}; max-age=1000`;
  });
  const unorderedList = document.querySelector(".pie-list");
  const pieType = document.getElementById("pie-type");
  const savePie = document.getElementById("save-pie");
  console.log();
  savePie.addEventListener("click", (e) => {
    const li = document.createElement("li");

    li.innerHTML = pieType.value;
    unorderedList.appendChild(li);
    if (!pieType.value || pieType.childNodes.length > 5) {
      unorderedList.removeChild(li);
    }
  });
  const faveIceCream = document.getElementById("fav-ice-cream");
  const saveIceCream = document.getElementById("save-ice-cream");
  const val = localStorage.getItem("key");
  if (val) {
    faveIceCream.value = val;
  }
  saveIceCream.addEventListener("click", (e) => {
    localStorage.setItem("key", `${faveIceCream.value}`);
  });
  const addApples = document.getElementById("add-apple");
  const addOrange = document.getElementById("add-orange");
  const emptyBasket = document.getElementById("reset-basket");
  const fruitBasket = document.getElementById("fruit-storage");
  const pieceFruit = document.getElementById("total-fruit");
  pieceFruit.innerText = 0;
  addApples.addEventListener("click", (e) => {
    fruitBasket.innerText += "🍎";
    if (fruitBasket) {
      pieceFruit.innerText++;
    }
  });
  addOrange.addEventListener("click", (e) => {
    fruitBasket.innerText += "🍊";
    if (fruitBasket) {
      pieceFruit.innerText++;
    }
    emptyBasket.addEventListener("click", (e) => {
      fruitBasket.innerText = "";
      pieceFruit.innerText = 0;
    });
  });
  const bubbleButton = document.getElementById("bubble-maker");
  bubbleButton.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  const dictionaryFetch = document.getElementById("dictionary-fetch");
  const resultArea = document.getElementById("results-area");
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/dictionary";
  dictionaryFetch.addEventListener("click", async (e) => {
    const response = await fetch(url);
    const data = await response.json();
    const dictionaryObj = data[0]
    console.log(data)
   const word = dictionaryObj.word
    console.log(dictionaryObj)

  const ul = document.createElement("ul")
  const li = document.createElement("li")
  li.innerText = `Word ${word}`
  resultArea.appendChild(ul)
  ul.appendChild(li)
  });
});
