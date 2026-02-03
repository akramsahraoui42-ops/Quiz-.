let time = 60;
setInterval(() => {
  time--;
  document.getElementById("time").innerText = time;
  if (time <= 0) document.getElementById("quizForm").submit();
}, 1000);

const questions = JSON.parse(localStorage.getItem("questions")) || [
  { q: "ما هو مستواك؟", options: ["مبتدئ", "متوسط", "متقدم"] }
];

const qBox = document.getElementById("questions");
questions.forEach((q, i) => {
  let html = `<p>${q.q}</p>`;
  q.options.forEach(o => {
    html += `<label><input type="radio" name="q${i}" value="${o}"> ${o}</label><br>`;
  });
  qBox.innerHTML += html;
});

document.getElementById("quizForm").addEventListener("submit", e => {
  e.preventDefault();
  let results = JSON.parse(localStorage.getItem("results")) || [];
  results.push({
    name: document.getElementById("username").value,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("results", JSON.stringify(results));
  alert("تم إرسال الاختبار ✅");
});
