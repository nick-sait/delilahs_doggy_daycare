// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitButton = document.getElementById("submit-button");
const form = document.getElementById("submit-form");
const h2 = document.getElementById('contact-heading');

submitButton.addEventListener('click', thankYou);


function thankYou(event) {
    event.preventDefault()
    form.style.display = "none";
    h2.style.fontSize = '24px';
    h2.innerHTML = "Thank you for your message!";
}

