document.addEventListener('DOMContentLoaded', function () {
    // This function runs when the HTML document is loaded and ready
    const form = document.getElementById('wikiForm'); // Make sure 'pageForm' matches your form's ID
    form.onsubmit = async function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather the data from the form
        const formData = {
            pageTitle: document.getElementById('pageTitle').value,
            sectionTitle: document.getElementById('sectionTitle').value,
            content: document.getElementById('content').value
        };

        try {
            // Send the form data to the server using a POST request
            const response = await fetch('/create-page', { // Make sure '/create-page' matches your server endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // We're sending JSON to the server
                },
                body: JSON.stringify(formData), // Convert the JavaScript object to a JSON string
            });

            // Convert the response from the server into a JavaScript object
            const result = await response.json();

            if (response.ok) {
                // If the server says everything's okay, tell the user their page was created
                alert('Page created successfully!');
            } else {
                // If the server says there's a problem (like a validation error), tell the user
                alert(`An error occurred: ${result.message}`);
            }
        } catch (error) {
            // If there's an issue with the network or the server doesn't respond, tell the user
            alert('Failed to connect to the server');
        }
    };
});
