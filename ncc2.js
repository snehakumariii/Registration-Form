function submitForm() {
    // Fetch user inputs
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const university = document.getElementById('university').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const address = document.getElementById('address').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const parentsName = document.getElementById('parentsName').value;
    const documents = document.getElementById('documents').files;
    const trainingModules = Array.from(document.getElementById('trainingModules').selectedOptions)
                                   .map(option => option.value);

    // Validate inputs
    if (!name || !dob || !gender || !nationality || !university || !course ||
        !email || !contactNumber || !address || !bloodGroup || !parentsName ||
        documents.length === 0 || trainingModules.length === 0) {
        // Display alert if any field is not filled up
        alert('Please fill in all the required fields.');
        return;
    }

    // Prepare data for submission (you would send this data to the server in a real system)
    const formData = {
        name,
        dob,
        gender,
        nationality,
        university,
        course,
        email,
        contactNumber,
        address,
        bloodGroup,
        parentsName,
        documents,
        trainingModules
    };

    // Display confirmation message (you would handle confirmation on the server in a real system)
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `
        <p>Thank you, ${name}! Your registration has been submitted.</p>
        <p>We will review your information and send a confirmation shortly.</p>
    `;
}

