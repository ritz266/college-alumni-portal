const API_URL = "https://script.google.com/macros/s/AKfycbyhSWI5LLMLh7RSGtjh2OiI7YEPdHcEJWQa75-yW4Xm4SqnDL2U2vxeXUEt1y4BA59sFA/exec";
async function registerUser(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "register", ...data })
  });

  const responseText = await res.text(); // Debug
  console.log("Raw response:", responseText);

  try {
    return JSON.parse(responseText);
  } catch (e) {
    console.error("Failed to parse JSON:", e);
    return { status: "error", message: "Invalid JSON from server" };
  }
}


async function loginUser(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "login", ...data })
  });
  return await res.json();
}

async function addAlumni(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "addAlumni", ...data })
  });
  return await res.json();
}
