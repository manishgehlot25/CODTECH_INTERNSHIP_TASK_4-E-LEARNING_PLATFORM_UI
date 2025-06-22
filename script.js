// Sample: Track progress or handle localStorage
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
    let percent = bar.dataset.percent;
    bar.style.width = percent + "%";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("categoryFilter");
  const courses = document.querySelectorAll(".course-card");

  filter.addEventListener("change", () => {
    const selected = filter.value;
    courses.forEach(card => {
      const category = card.dataset.category;
      if (selected === "all" || category === selected) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

function toggleLesson(item) {
  item.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
    const percent = bar.dataset.percent;
    bar.style.width = percent + "%";
  });
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login successful (demo only)");
  window.location.href = "dashboard.html";
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Signup successful (demo only)");
  window.location.href = "login.html";
});