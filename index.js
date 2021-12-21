// document.getElementById("count-el").innerText = 5

// We need to store count => variable
// initialize count at 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// Change the conunt-el in the HTML to reflect the new count

let count = 0
function increment() {
  count += 1
  document.getElementById("count-el").innerText = count;
}
