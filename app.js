const backendUrl = "https://script.google.com/macros/s/AKfycbw_Gi31GJB_QQz0LCNHkfKsuLO3FP6nb04LaqWGWeOlgY5KtthJvhwrKGzuXsg_kOPVNg/exec";
// Replace with your deployed Google Cloud Function endpoint

// LOGIN
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const regNo = document.getElementById("regNo").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${backendUrl}/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ regNo, password })
    });

    const data = await res.json();
    if (data.success) {
      window.location.href = "alumni.html";
    } else {
      alert("Login failed");
    }
  });
}

// REGISTER
if (document.getElementById("registerForm")) {
  document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const payload = {
      regNo: document.getElementById("regNo").value,
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };

    const res = await fetch(`${backendUrl}/register`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    alert(data.message);
    if (data.success) window.location.href = "index.html";
  });
}

// ALUMNI FORM
if (document.getElementById("alumniForm")) {
  document.getElementById("alumniForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      batch: document.getElementById("batch").value,
      branch: document.getElementById("branch").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      designation: document.getElementById("designation").value,
      employer: document.getElementById("employer").value,
      experience: document.getElementById("experience").value,
      linkedin: document.getElementById("linkedin").value,
      contribution: Array.from(document.getElementById("contribution").selectedOptions).map(o => o.value)
    };

    const res = await fetch(`${backendUrl}/addAlumni`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    alert(data.message);
    loadDirectory();
  });

  // Search directory
  document.getElementById("search").addEventListener("input", loadDirectory);
  loadDirectory();
}

async function loadDirectory() {
  const res = await fetch(`${backendUrl}/getAlumni`);
  const data = await res.json();
  const searchTerm = document.getElementById("search").value.toLowerCase();

  const directoryDiv = document.getElementById("directory");
  directoryDiv.innerHTML = "";

  data.forEach(row => {
    if (Object.values(row).join(" ").toLowerCase().includes(searchTerm)) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${row.imageUrl || 'default.png'}" width="100" height="100"><br>
        <strong>${row.firstName} ${row.lastName}</strong><br>
        Batch: ${row.batch}<br>
        Branch: ${row.branch}<br>
        ${row.designation} @ ${row.employer}<br>
        <a href="${row.linkedin}" target="_blank">LinkedIn</a><br>
        Contributions: ${row.contribution}
      `;
      directoryDiv.appendChild(card);
    }
  });
}

