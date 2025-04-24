document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking submitted!');
    // Here you can add code to handle the form submission, e.g., sending data to a server
});


  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop normal form submission

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("✅ Your details have been submitted successfully!");
        contactForm.reset(); // Optional: clears the form
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("⚠️ Network error. Please try again later.");
    });
  });
