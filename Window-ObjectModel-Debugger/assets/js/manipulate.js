export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  const title = document.querySelector("title");
  title.innerText = "Marcus Rowe's Portfolio";
  console.log(title);
  // Your code here
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  // Your code here
  const h1 = document.body.querySelector("h1")
  h1.innerText = "Marcus Rowe"
  console.log(h1)
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  // Your code here
  let section = document.body.querySelector(".section")
  // console.log(section)
 let p = section.children[1]
p.innerText = " Marcus really loves to code in his free time"
console.log(p)

}
