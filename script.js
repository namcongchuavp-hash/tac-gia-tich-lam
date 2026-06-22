let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".hero-slider .slide");
  const dots = document.querySelectorAll(".slide-dots .dot");

  if (!slides.length) return;

  if (index < 0) currentSlide = slides.length - 1;
  else if (index >= slides.length) currentSlide = 0;
  else currentSlide = index;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[currentSlide].classList.add("active");

  if (dots[currentSlide]) {
    dots[currentSlide].classList.add("active");
  }
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

function goToSlide(index) {
  showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const el = document.querySelector(btn.dataset.scroll);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  });

  showSlide(0);

  setInterval(() => {
    changeSlide(1);
  }, 5000);
});