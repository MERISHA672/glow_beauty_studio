
// Glow Beauty Studio - Website interactions

// Display a welcome message in the browser console
console.log("Welcome to Glow Beauty Studio!");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome message when someone clicks the WhatsApp booking link
const bookingLink = document.querySelector(".contact a");

if (bookingLink) {
    bookingLink.addEventListener("click", function () {
        console.log("A customer is interested in booking an appointment!");
    });
}
