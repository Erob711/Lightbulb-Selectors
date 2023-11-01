// Write your code here
console.log("bruuuh");

let leftLight = document.getElementById("lightbulb1");
let midLight = document.getElementById("lightbulb2");
let rightLight = document.getElementById("lightbulb3");
let subtitle = document.querySelector(".subtitle");
let count = 0;

addToEventListener(leftLight);
addToEventListener(midLight);
addToEventListener(rightLight);

function addToEventListener(element) {
  element.addEventListener("click", function () {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
    element.classList.toggle("active");
  });
}
