const editButton = document.getElementById('editButton');
const editFormContainer = document.getElementById('editFormContainer');
const editForm = document.getElementById('editForm');

// Current profile details
const profilePic = document.getElementById('profilePic');
const userName = document.getElementById('userName');
const userBio = document.getElementById('userBio');

// Toggle the edit form on button click
editButton.addEventListener('click', function() {
    editFormContainer.style.display = editFormContainer.style.display === 'block' ? 'none' : 'block';
});

// Handle form submission to update profile details
editForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form inputs
    const nameInput = document.getElementById('name').value;
    const bioInput = document.getElementById('bio').value;
    const pictureInput = document.getElementById('picture').value;

    // Update the profile details
    userName.textContent = nameInput;
    userBio.textContent = bioInput;

    if (pictureInput) {
        profilePic.src = pictureInput;
    }

    // Hide the form after submission
    editFormContainer.style.display = 'none';
});
