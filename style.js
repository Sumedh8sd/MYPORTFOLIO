
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

 
  contactForm.reset();

  alert('Form submitted successfully!');
});