const main = document.querySelector(".main");
function createElements(size) {
 for (let i = 0; i < size; i++) {
    const div = document.createElement("div")
    div.classList.add("child")
    div.textContent = ""
    main.appendChild(div)
 }
};
const newDiv = document.createElement("div");
newDiv.appendChild(main);
newDiv.classList.add("new");
createElements(256);
const body = document.querySelector("body");
body.appendChild(newDiv);

const button = document.createElement("button");
body.appendChild(button)
button.textContent = "Reset";
button.addEventListener("click", () => {
   let userChoice = prompt("Please chose grid size from 1-100");
    if (userChoice > 100) {
      alert("enter number from 1-100")
    }
   let newDiv = document.querySelector(".new")
   let main = document.querySelector(".main")
   newDiv.removeChild(main)
   console.log(userChoice)
   createNewGrid(userChoice * userChoice);
   let divs = document.querySelectorAll(".newChild")
   divs.forEach(div => {
    div.style.width = "calc(100% / " + userChoice + ") ";
    div.style.paddingBottom = "calc(100% / " + userChoice + ") ";  
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    }) 
   });
});
function createNewGrid(size) {
   const father = document.querySelector(".new")
   const main = document.createElement("div");
   father.appendChild(main)
   main.classList.add("main")
 for (let i = 0; i < size; i++) {
    const div = document.createElement("div")
    div.classList.add("newChild")
    div.textContent = ""
    main.appendChild(div)
 }
};
let rgbButton = document.createElement("button");
rgbButton.textContent = "RGB";
body.appendChild(rgbButton);
rgbButton.addEventListener("click", function (e) {
      let div = document.querySelectorAll(".newChild");
      let oldDivs = document.querySelectorAll(".child")
      div.forEach(div => {
         div.addEventListener("mouseenter", function (e){
      let r = +e.offsetX * 10;
      let g = +e.offsetY * 10;
      div.style.backgroundColor = "rgb("+r+","+g+", 40)" 
         })
      })
      oldDivs.forEach(div => {
         div.addEventListener("mouseenter", function(e) {
      let r = +e.offsetX * 10;
      let g = +e.offsetY * 10;
      div.style.backgroundColor = "rgb("+r+","+g+", 40)" 
         })
      })
});
