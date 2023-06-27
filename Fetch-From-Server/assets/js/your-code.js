export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
    return fetch( "/dogs/2")
}

export function postNewDog() {
    const body = new URLSearchParams({
    name: true,
    age: true

    })
   return fetch("/dogs",{
    method: "POST",
    headers:{"Content-Type": "application/x-www-form-urlencoded" },
    body: body



   })
//
}

export function postNewDogV2(name, age) {
    const body = new URLSearchParams({
    name: name,
    age: age

    })
    return fetch("/dogs", {
        method: "POST",
        headers:{"Content-Type":  "application/x-www-form-urlencoded" },
        body: body

    })

}

export function deleteDog(id) {
      // Your code here
       return fetch("/dogs/90/delete", {
        method: "POST",
        headers: {"AUTH": 'ckyut5wau0000jyv5bsrud90y'}
    })
}

