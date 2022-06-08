/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
*/
let imgEl = document.getElementById("imgWrapper")

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        imgEl.innerHTML = `<img src=${data.message} alt="random dow image" class="dog-img">`
    })



