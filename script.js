// Function to change the background color of the portfolio section
function changeBackgroundColor() {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.style.backgroundColor = '#e0f7fa'; // Change to a cool blue color
}

// Function to display an alert when the contact form is submitted
function submitForm(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    document.getElementById('contactForm').reset(); // Clear the form after submission
}
