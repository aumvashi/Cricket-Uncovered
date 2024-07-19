// Sample data storage
let users = [];
let isLoggedIn = false;

// Function to encrypt password (basic example)
function encryptPassword(password) {
  return btoa(password); // Base64 encryption for demonstration purposes
}

// Function to display admin view
function displayAdminView() {
  const adminTableBody = document.getElementById("admin-table-body");
  adminTableBody.innerHTML = "";
  users.forEach((user) => {
    const row = document.createElement("tr");
    const usernameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const fullnameCell = document.createElement("td");
    const phoneCell = document.createElement("td");
    const passwordCell = document.createElement("td");
    usernameCell.textContent = user.username;
    emailCell.textContent = user.email;
    fullnameCell.textContent = user.fullname;
    phoneCell.textContent = user.phone;
    passwordCell.textContent = user.password;
    row.appendChild(usernameCell);
    row.appendChild(emailCell);
    row.appendChild(fullnameCell);
    row.appendChild(phoneCell);
    row.appendChild(passwordCell);
    adminTableBody.appendChild(row);
  });
}

// Function to show specific section
function showSection(sectionId) {
  const sections = document.querySelectorAll("main > section");
  sections.forEach((section) => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });

  const dashboardLink = document.getElementById("dashboard-link");
  const authLinks = document.querySelector(".auth-links");

  if (isLoggedIn) {
    dashboardLink.style.display = "block";
    authLinks.style.display = "none";
  } else {
    dashboardLink.style.display = "none";
    authLinks.style.display = "flex";
  }
}

// Initialize to show home by default
document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});

// Login form submission
document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username === "admin" && password === "root") {
    isLoggedIn = true;
    showSection("admin-view");
    displayAdminView();
  } else {
    const user = users.find(
      (user) =>
        user.username === username &&
        user.password === encryptPassword(password)
    );
    if (user) {
      isLoggedIn = true;
      alert("Login successful");
      showSection("dashboard");
    } else {
      alert("Invalid username or password");
    }
  }
});

// Signup form submission
document.getElementById("signup").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const email = document.getElementById("signup-email").value;
  const fullname = document.getElementById("signup-fullname").value;
  const phone = document.getElementById("signup-phone").value;

  if (users.some((user) => user.username === username)) {
    alert("Username already taken");
  } else {
    const encryptedPassword = encryptPassword(password);
    users.push({
      username,
      password: encryptedPassword,
      email,
      fullname,
      phone,
    });
    alert("Sign up successful");
    showSection("login-form");
  }
});
