const numberEl = document.getElementById("number");
const decreaseBtnEl = document.getElementById("decrease-btn");
const increaseBtnEl = document.getElementById("increase-btn");
const resetBtnEl = document.getElementById("reset-btn");
const numberContainerEl = document.getElementById("number-container")
let counter = 0;

decreaseBtnEl.addEventListener("click", function() {
  counter -= 1;
  compare()
})

increaseBtnEl.addEventListener("click", function() {
  counter += 1;
  compare()
})

resetBtnEl.addEventListener("click", function() {
  counter = 0;
  compare()
})
function compare() {
  if (counter < 0) {
    numberContainerEl.innerHTML = `<p id="number" class="minus">${counter}</p>`
  } else if (counter > 0) {
    numberContainerEl.innerHTML = `<p id="number" class="plus">${counter}</p>`
  } else {
    numberContainerEl.innerHTML = `<p id="number" class="zero">${counter}</p>`
  }
}





