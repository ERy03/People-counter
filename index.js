// document.getElementById("count-el").innerText = 5

// We need to store count => variable
// initialize count at 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// Change the conunt-el in the HTML to reflect the new count

// listen for a click on the save button

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let savedCount = count + " - "
  saveEl.textContent += savedCount
  countEl.textContent = 0
  count = 0
}
