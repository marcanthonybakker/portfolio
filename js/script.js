document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const dropdownMenu = document.getElementById('dropdownMenu');

  let isOpen = false;
  let isAnimating = false;

  toggleButton.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;

    if (!isOpen) {
      dropdownMenu.classList.add('show', 'animate-in');
      dropdownMenu.classList.remove('animate-out');
      isOpen = true;

      setTimeout(() => {
        isAnimating = false;
      }, 400); // duur van dropdownIn
    } else {
      dropdownMenu.classList.remove('animate-in');
      dropdownMenu.classList.add('animate-out');

      setTimeout(() => {
        dropdownMenu.classList.remove('show', 'animate-out');
        isAnimating = false;
        isOpen = false;
      }, 300); // duur van dropdownOut
    }
  });

  // Optioneel: sluit menu als je buiten het menu klikt
  document.addEventListener('click', (e) => {
    if (
      isOpen &&
      !dropdownMenu.contains(e.target) &&
      !toggleButton.contains(e.target)
    ) {
      toggleButton.click();
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel-image");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function updateCarousel() {
      images.forEach((img, index) => {
          img.style.display = index === currentIndex ? "block" : "none";
      });

      // Knoppen tonen/verbergen met class
      if (currentIndex === 0) {
          prevBtn.classList.add("hidden");
      } else {
          prevBtn.classList.remove("hidden");
      }

      if (currentIndex === images.length - 1) {
          nextBtn.classList.add("hidden");
      } else {
          nextBtn.classList.remove("hidden");
      }
  }

  prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });

  nextBtn.addEventListener("click", () => {
      if (currentIndex < images.length - 1) {
          currentIndex++;
          updateCarousel();
      }
  });

  updateCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
  const afbeelding = document.getElementById("wisselHeader");
  const bronnen = ["./img/header.png", "./img/header2.png"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % bronnen.length;
    afbeelding.src = bronnen[index];
  }, 700); // elke 1000 milliseconden = 1 seconde
});