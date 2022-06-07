/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
*/
let dogImgEl = document.getElementById("dogImg")

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => dogImgEl.src=data.message)


