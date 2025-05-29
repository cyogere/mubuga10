// Contact Form Submission
const contactForm = document.querySelector('.contact-page .contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Simple validation
        if (name.trim() === '' || email.trim() === '') {
            alert('Please fill in all required fields');
            return;
        }
        
        // In a real application, you would send this data to a server
        alert(`Thank you, ${name}! We have received your message and will contact you at ${email} soon.`);
        
        // Reset form
        this.reset();
    });
}