 // Grab elements from the DOM
        const form = document.getElementById('shipmentForm');
        const submitBtn = document.getElementById('submitBtn');
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        const trackingIdDisplay = document.getElementById('trackingIdDisplay');

        // Listen for the form submission
        form.addEventListener('submit', function(event) {
            // Prevent the page from refreshing
            event.preventDefault();

            // Hide previous messages
            errorMessage.style.display = 'none';
            successMessage.style.display = 'none';

            // Get user input values
            const origin = document.getElementById('origin').value.trim();
            const destination = document.getElementById('destination').value.trim();
            const weight = parseFloat(document.getElementById('weight').value);

            // 1. Client-Side Validation
            if (origin.toLowerCase() === destination.toLowerCase()) {
                errorMessage.textContent = 'Origin and Destination cannot be the exact same.';
                errorMessage.style.display = 'block';
                return; // Stop the function here
            }

            if (weight <= 0) {
                errorMessage.textContent = 'Weight must be greater than 0.';
                errorMessage.style.display = 'block';
                return; // Stop the function here
            }

            // 2. Loading State
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            // 3. Simulate backend processing (1.5 seconds delay)
            setTimeout(() => {
                // Generate a random tracking ID (e.g., TRK-12345678)
                const randomId = Math.floor(10000000 + Math.random() * 90000000);
                const trackingId = 'TRK-' + randomId;

                // Update UI for success
                form.reset(); // Clear the inputs
                submitBtn.textContent = 'Submit Shipment';
                submitBtn.disabled = false;
                
                // Show success message with the new ID
                trackingIdDisplay.textContent = trackingId;
                successMessage.style.display = 'block';

            }, 1500); 
        });