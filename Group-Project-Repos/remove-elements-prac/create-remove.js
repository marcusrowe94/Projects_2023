/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const urlArray = url.split("/")
        const breedNames = urlArray[4]
        console.log(breedNames)

        /*------------ Create new dog card
         with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const li = document.createElement("li")
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const figCaption = document.createElement("figcaption")
        img.src = url
        figCaption.innerText = breedNames
        figure.appendChild(img)
        figure.appendChild(figCaption)
        li.appendChild(figure)
        console.log([li, figure, img, figCaption])

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const ul = document.body.querySelector("ul")
        ul.appendChild(li)
      

    } catch (e) {
        console.log(e)
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.body.querySelector("li")
    console.log(firstDog)
    if(firstDog){
        firstDog.remove()
    }else{
        return
    }

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
// window.onload = add;
