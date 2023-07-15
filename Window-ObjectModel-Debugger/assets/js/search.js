export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
return document.getElementById(id)
    // Your code here
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
return document.querySelector(tag)
    // Your code here
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
return document.querySelector("."+ cls)
    // Your code here
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    return Array.from(document.querySelectorAll(tag))

    // Your code here
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    return Array.from(document.getElementsByClassName(`${cls}`))

    // Your code here
}
