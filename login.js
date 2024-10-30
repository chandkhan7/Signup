document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const enrollmentNumberInput = document.getElementById('enrollment-number');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enrollmentNumber = enrollmentNumberInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation feedback
    if (enrollmentNumber === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }

    // Retrieve stored user data
    const storedUser = localStorage.getItem('user_' + enrollmentNumber);
    if (!storedUser) {
      alert('No account found with this enrollment number. Please sign up.');
      return;
    }

    const user = JSON.parse(storedUser);

    // Check if the stored password matches the entered password
    if (user.password !== password) {
      alert('Incorrect password. Please try again.');
      return;
    }

    // Successful login
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  });
});
