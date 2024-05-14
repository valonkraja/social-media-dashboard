const toggleBtn = document.querySelector(".toggle-btn");
const circle = document.querySelector(".circle");
const cards = document.querySelectorAll(".card");
const descs = document.querySelectorAll(".desc");
const dashboard = document.querySelector(".social-dashboard");

toggleBtn.addEventListener("click", function () {
  circle.classList.toggle("active");
  if (circle.classList.contains("active")) {
    document.querySelector("body").style.color = "hsl(230, 17%, 14%)";
    document.querySelector("body").style.backgroundColor = "#fff";
    toggleBtn.classList.add("light");
  } else {
    document.querySelector("body").style.color = "#fff";
    document.querySelector("body").style.backgroundColor = "hsl(230, 17%, 14%)";
    toggleBtn.classList.remove("light");
  }
  document.querySelector(".top").classList.toggle("light");
  document.querySelector("header").classList.toggle("light");

  cards.forEach((card) => card.classList.toggle("light"));

  descs.forEach((desc) => desc.classList.toggle("light"));
});

cards.forEach((card) =>
  card.addEventListener("mouseover", function (e) {
    e.target.classList.add("hover");
  })
);

cards.forEach((card) =>
  card.addEventListener("mouseleave", function (e) {
    e.target.classList.remove("hover");
  })
);

toggleBtn.addEventListener("mouseover", function (e) {
  if (circle.classList.contains("active")) e.target.classList.remove("light");
});

toggleBtn.addEventListener("mouseleave", function (e) {
  if (circle.classList.contains("active")) e.target.classList.add("light");
});
