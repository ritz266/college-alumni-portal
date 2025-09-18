const API_URL = "https://script.google.com/macros/s/AKfycbz2kTUtq-256agppEnfqZb4g454kbOC_YGLne8s936jFo-oh6ch5EOyGYA7l6Ezt5YkSw/exec";

async function registerUser(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "register", ...data })
  });
  return await res.json();
}

async function loginUser(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "login", ...data })
  });
  return await res.json();
}

async function addAlumni(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "addAlumni", ...data })
  });
  return await res.json();
}
