// Function to create a new user
function createUser(username, email, password) {
    // Retrieve existing users from local storage or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("User with this email already exists.");
        return;
    }

    // Create a new user object and store it in the users array
    const user = { username, email, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users)); // Save updated users array to local storage

    alert("User registered successfully!");
}

// Function to log in a user
function loginUser(email, password) {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if a user with the provided email and password exists
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.username}!`);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert("Invalid email or password.");
    }
}
