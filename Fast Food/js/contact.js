// contact form validation

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var isValid = true;

    // check name
    if (name === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // check email using a simple regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // check message
    if (message === "") {
        document.getElementById("messageError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    // if everything is valid, show success message and reset form
    if (isValid) {
        document.getElementById("formSuccess").style.display = "block";
        document.getElementById("contactForm").reset();
    }
});