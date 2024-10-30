document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const enrollmentNumber = document.getElementById('enrollment-number').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation with feedback
    if (!enrollmentNumber || !username || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Store user information in localStorage
    const user = {
      enrollmentNumber,
      username,
      password
    };
    localStorage.setItem('user_' + enrollmentNumber, JSON.stringify(user));

    alert("Signup successful! You can now log in.");
    signupForm.reset();
    window.location.href = 'index.html';
  });
});
