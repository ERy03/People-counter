# JS

## People Counter
In index.html file create a `<script>` tag that allows you to write JS

``` html
<script>
document.getElementById("count-el").innerText = 5
</script>
```

>>Hey html document, I want to get an element with an id called "count-el" and change its text to 5!

`document` refers to the entire html document

What does `document.getElementById("count-el")` return when we console.log it?
`<h2 id="count-el"></h2>`

However, we don't really want to write JS code inside our script tag

Instead:

1. create an `index.js` file and put all our JS code
2. `<script src="index.js></script>`

### Giving an JS attribute to html tags

``` html
<button id="increment-btn" onclick="increment()">Increment</button>
```

### Creating a function

``` Javascript
function nameOfFunction() {

};

// Invoking the function
nameOfFunction()
```

Functions can access variables from outerscopes (not inside of function) but doens't work the other way around

 ``` Javascript
let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

console.log(totalTime)

// !ReferenceError: totalTime is not defined
```
`let` variables are called block scoped

### The DOM
What is it?
Document Object Model
(aka how we use JavaScript to modify a website)

1. Document
  - We are interacting with the HTML Document
2. Object
  - HTML document is shoved-in as JavaScript Object
3. Model
  - The representation of the HTML element in Javascript

---
