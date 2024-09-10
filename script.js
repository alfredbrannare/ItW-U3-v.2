function clickMe() {
    // Looks at the h1 element
    const h1Element = document.getElementById("changeH1Element");

    // Checks the current text of h1 inside index.html and does the loop.
    if (h1Element.textContent === "Hello World") { //Is the text inside h1Element "Hello World"?
        h1Element.innerHTML = "Why did you click the button!?"; //Change to "Why did you click..."
    } else { 
        h1Element.innerHTML = "Hello World"; //Change to "Hello World"
    }
}
