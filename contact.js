const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      status.innerHTML = "✔ Message sent successfully!";
      status.className = "form-status success";
      form.reset();
    } else {
      status.innerHTML = "✖ Failed to send. Try again.";
      status.className = "form-status error";
    }

  } catch {
    status.innerHTML = "✖ Network error.";
    status.className = "form-status error";
  }
});
