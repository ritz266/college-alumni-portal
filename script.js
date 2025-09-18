const API_URL = "https://script.google.com/macros/s/AKfycbzHb8bgrLxZS6VFiLZsIL996_MbaZNDafhQjSOXOBdJc7PWsjbYh1gag2j4-lTLqxgA/exec";

// Example: Register
function registerUser(formData) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "register", ...formData })
  })
    .then(res => res.json());
}

// Example: Login
function loginUser(email, password) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "login", email, password })
  })
    .then(res => res.json());
}

// Example: Add Alumni
function addAlumni(formData) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "addAlumni", ...formData })
  })
    .then(res => res.json());
}

// Example: List Alumni
function listAlumni() {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "listAlumni" })
  })
    .then(res => res.json());
}
