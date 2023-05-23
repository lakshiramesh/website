// script.js

document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetch form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Perform profile update logic here
    
    // Create success message element
    var successMessage = document.createElement("div");
    successMessage.textContent = "Profile updated successfully!";
    successMessage.className = "success-message";
    
    // Append message element to the body
    document.body.appendChild(successMessage);
    
    // Remove the message after a certain time
    setTimeout(function() {
      document.body.removeChild(successMessage);
    }, 3000); // 2 seconds
  });
  