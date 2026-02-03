const ADMIN_PASSWORD = "12345"; // غيّرها

function login() {
  if (document.getElementById("password").value === ADMIN_PASSWORD) {
    localStorage.setItem("admin", "true");
    location.href = "dashboard.html";
  } else {
    alert("كلمة مرور خاطئة");
  }
}

if (location.pathname.includes("dashboard")) {
  if (!localStorage.getItem("admin")) location.href = "admin.html";

  document.getElementById("questions").value =
    localStorage.getItem("questions");

  const results = JSON.parse(localStorage.getItem("results")) || [];
  document.getElementById("count").innerText = results.length;
  document.getElementById("results").textContent =
    JSON.stringify(results, null, 2);
}

function saveQuestions() {
  localStorage.setItem("questions", document.getElementById("questions").value);
  alert("تم حفظ الأسئلة");
}
