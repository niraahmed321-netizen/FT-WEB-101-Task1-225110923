const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();
    formNote.textContent = `Thanks, ${visitorName}! Your form has been completed.`;
    contactForm.reset();
});
