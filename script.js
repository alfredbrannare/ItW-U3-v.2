function clickMe() {
    // Looks at/finds the elemet with id = changeH1Element and stores it in h1Element
    const h1Element = document.querySelector("#changeH1Element");

    // Checks the current text of h1 inside index.html and does the loop.
    if (h1Element.textContent === "Hello World") { //Is the text inside h1Element "Hello World"?
        h1Element.innerHTML = "Goodbye World"; //Change to "Why did you click..."
    } else { 
        h1Element.innerHTML = "Hello World"; //Change to "Hello World"
    }
}
