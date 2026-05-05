/* =========================
   MENU RESPONSIVE
========================= */
const navToggle = document.createElement("button");
navToggle.innerText = "☰";
navToggle.classList.add("nav-toggle");

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

navbar.appendChild(navToggle);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* =========================
   SCROLL SUAVE
========================= */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });

    // cerrar menú en mobile
    navLinks.classList.remove("active");
  });
});


/* =========================
   HEADER SCROLL EFECTO
========================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});


/* =========================
   FAQ INTERACTIVO
========================= */
const faqs = document.querySelectorAll("details");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faqs.forEach(item => {
      if (item !== faq) {
        item.removeAttribute("open");
      }
    });
  });
});


/* =========================
   CTA SIMULACIÓN
========================= */
const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🚀 Aquí iniciaría el registro o demo");
  });
});