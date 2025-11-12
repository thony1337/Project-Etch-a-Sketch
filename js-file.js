const main = document.querySelector(".main")
function createElements(size) {
 for (let i = 0; i < size; i++) {
    const div = document.createElement("div")
    div.classList.add("child")
    div.textContent = "hi"
    main.appendChild(div)
 }
}
const newDiv = document.createElement("div")
newDiv.appendChild(main)
newDiv.classList.add("new")
createElements(256)
const body = document.querySelector("body")
body.appendChild(newDiv)