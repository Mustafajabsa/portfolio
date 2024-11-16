// Typing Effect for the "Full Stack Developer" Text
const typingText = [
  "Full Stack Developer",
  "Django Developer",
  "Web Developer",
];
let index = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-active");
        // Add cascading animation classes
        const children = entry.target.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add("cascade-animation");
          children[i].classList.add(`cascade-delay-${i + 1}`);
        }
      } else {
        entry.target.classList.remove("scroll-active");
        const children = entry.target.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.remove(
            "cascade-animation",
            `cascade-delay-${i + 1}`
          );
        }
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  function changeActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", changeActiveLink);
  changeActiveLink(); // Call once to set the initial active link
});
