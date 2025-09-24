
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Form submission handler (ready for AWS Lambda/API Gateway integration)
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                teamNumber: '32149',
                timestamp: new Date().toISOString()
            };

            // TODO: Replace with your actual API Gateway endpoint
            // const apiEndpoint = 'https://your-api-gateway-url.amazonaws.com/prod/contact';
            
            // For now, just log the data (ready for Lambda integration)
            console.log('Form submission ready for Lambda:', formData);
            
            // Placeholder success message
            alert('Thank you for your message! We will get back to you soon.\n\nNote: API integration pending.');
            this.reset();

            /*
            // Uncomment when API Gateway is configured:
            try {
                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert('Thank you for your message! We will get back to you soon.');
                    this.reset();
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later or contact us directly at claycountystemalliance@gmail.com');
            }
            */
        });

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.about-card, .gallery-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    