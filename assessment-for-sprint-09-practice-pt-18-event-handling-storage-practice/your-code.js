
window.addEventListener("DOMContentLoaded", () => {
const button = document.getElementById("make-circle-blue")
const div = document.getElementById("blue-border-circle")
button.addEventListener("click", (e)=>{
  div.className ="blue-fill"

})
const inputId = document.getElementById("will-not-check")
inputId.addEventListener("click", (e)=>{
  e.preventDefault()

})
const change = document.getElementById("change-bananas-status")
const text = document.getElementById("bananas-div")
const imgs = document.getElementById("bananas-image-div")

change.addEventListener("click", (e)=>{
  text.innerHTML = 'No Bananas Today!'
 const img = document.createElement("img")
 img.src = "./images/no-bananas.png"
 imgs.appendChild(img)
 if(imgs.childNodes.length >= 1) imgs.removeChild(img)


})
const fav = document.getElementById("fav-cookie")
const store = document.getElementById("store-cookie")
const val = document.cookie.split("; ")[0].split("=")[1]
if(val  || document.cookie){
  fav.value = val
}
store.addEventListener("click",(e)=>{
document.cookie = `favCookie=${fav.value}; max-age= 10000000`

})
const ul = document.querySelector(".pie-list")
const input = document.getElementById("pie-type")
const submit = document.getElementById("save-pie")
submit.addEventListener("click", (e)=>{
  if(input.value && ul.childNodes.length <= 4){
    const li = document.createElement("li")
    li.className = "pie-list"
    li.innerText = input.value
    ul.appendChild(li)

  }
})
const faveIceCream = document.getElementById("fav-ice-cream")
const saveIceCream = document.getElementById("save-ice-cream")
const value1 = localStorage.getItem("ice")
if(value1) faveIceCream.value = value1
saveIceCream.addEventListener("click", (e)=>{
  localStorage.setItem(`ice`,  `${faveIceCream.value}` )



})
const addApples = document.getElementById("add-apple")
const addOrange = document.getElementById("add-orange")
const reset = document.getElementById("reset-basket")
const storage = document.getElementById("fruit-storage")
const total = document.getElementById("total-fruit")
total.innerText = 0


addApples.addEventListener("click", (e)=>{
  if(total.innerText > 24) return
  storage.innerText += "🍎"
  total.innerText++


})
addOrange.addEventListener("click", (e)=>{
  if(total.innerText > 24) return
  storage.innerText += "🍊"
  total.innerText++


})
reset.addEventListener("click", (e)=>{
  storage.innerText= ""
  total.innerText= 0

})

document.getElementById("bubble-maker").addEventListener("click", (e)=>{
  e.stopPropagation()

})
const dictionaryFetch = document.getElementById("dictionary-fetch")
const results = document.getElementById("results-area")
dictionaryFetch.addEventListener("click", async (e)=>{
const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dictionary")
const data = await res.json()
const dictionaryObj = data[0]
const define = dictionaryObj.meanings[0].definitions[0].definition
const word  = dictionaryObj.word
const ul = document.createElement("ul")
const wordLi = document.createElement("li")
const definitionLi = document.createElement("li")
wordLi.innerText =`Word: ${word}`
definitionLi.innerText = `Definition: ${define}`

results.appendChild(ul)
ul.appendChild(wordLi)
ul.appendChild(definitionLi)


})
});
