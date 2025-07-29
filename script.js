const todayList = document.getElementById("today-list");
const tomorrowList = document.getElementById("tomorrow-list");
const quoteText = document.getElementById("quote-text");

const quotes = [
  "You can do it 💖",
  "Well done, superstar! 🌟",
  "Every step counts 🐾",
  "You're crushing it! 🚀",
  "Keep shining! ✨",
  "Mission accomplished! ✅",
];

function addTask(type) {
  const list = type === "today" ? todayList : tomorrowList;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", checkIfAllDone);

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Write task...";

  li.appendChild(checkbox);
  li.appendChild(input);
  list.appendChild(li);
}

function checkIfAllDone() {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  const allChecked = Array.from(allCheckboxes).every((cb) => cb.checked);

  if (allChecked && allCheckboxes.length > 0) {
    const random = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[random];
  }
}
