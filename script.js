// Example: Show success message on form submission
$('#contact-form').on('submit', function(e) {
    e.preventDefault();

    // Serialize form data
    var formData = $(this).serialize();

    // AJAX POST request
    $.ajax({
        url: 'submit_form.php',
        method: 'POST',
        data: formData,
        success: function(response) {
            // Display success message
            $('#form-message').text('Message sent successfully!').addClass('text-success').fadeIn();

            // Reset form after submission
            $('#contact-form')[0].reset();
        },
        error: function(xhr, status, error) {
            // Handle errors
            $('#form-message').text('Error: ' + error).addClass('text-danger').fadeIn();
        }
    });
});
// Show registration modal
$('#showRegistrationModal').click(function() {
    $('#registrationModal').modal('show');
});

// Show login modal
$('#showLoginModal').click(function() {
    $('#loginModal').modal('show');
});

// Handle registration form submission
$('#registrationForm').submit(function(e) {
    e.preventDefault();
    // Perform registration logic (e.g., AJAX request to backend)
    // Close modal after successful registration
    $('#registrationModal').modal('hide');
});

// Handle login form submission
$('#loginForm').submit(function(e) {
    e.preventDefault();
    // Perform login logic (e.g., AJAX request to backend)
    // Close modal after successful login
    $('#loginModal').modal('hide');
});

// Example: Load user's favorites
function loadFavorites() {
    // Replace with actual logic to fetch and populate favorites
    const favorites = ['Property 1', 'Property 2'];
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = ''; // Clear previous list

    favorites.forEach(favorite => {
        const li = document.createElement('li');
        li.textContent = favorite;
        favoritesList.appendChild(li);
    });
}

// Call loadFavorites() when page loads or user logs in
loadFavorites();
