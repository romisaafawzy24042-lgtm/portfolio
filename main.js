// Dark Mode
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("darkModeToggle");
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark-mode");
    }

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    });
});


// Validation of Form
let form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let valid = true;

        // Name
        if (name === "") {
            document.getElementById("nameError").innerText = "Name is required";
            valid = false;
        } else {
            document.getElementById("nameError").innerText = "";
        }

        // Email
        if (email === "") {
            document.getElementById("emailError").innerText = "Email is required";
            valid = false;
        } else if (!email.includes("@")) {
            document.getElementById("emailError").innerText = "Enter valid email";
            valid = false;
        } else {
            document.getElementById("emailError").innerText = "";
        }

        // Message
        if (message === "") {
            document.getElementById("messageError").innerText = "Message is required";
            valid = false;
        } else {
            document.getElementById("messageError").innerText = "";
        }
        if (valid) {
            alert("Message sent successfully!");
            form.reset();
        }
    });

}

const btn = document.getElementById("scrollBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};