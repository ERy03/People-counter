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

However, we don't really want to write JS code inside our script tag

Instead:

1. create an `index.js` file and put all our JS code
2. `<script src="index.js></script>`
