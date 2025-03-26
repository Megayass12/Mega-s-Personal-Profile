let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


document.getElementById("aboutMeLink").addEventListener("click", function (event) {
    event.preventDefault(); 
    
    
    const targetSection = document.getElementById("aboutMeSection");
  
   
    targetSection.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
    });
  });

  document.getElementById("homeLink").addEventListener("click", function (event) {
    event.preventDefault(); 
    

    const targetSection = document.getElementById("hero");
  
  
    targetSection.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
    });
  });


const modal = document.getElementById("skillsModal");
const closeModal = document.querySelector(".close");


const triggers = document.querySelectorAll(".trigger-modal");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex"; 
  });
});


closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("mode-toggle");
  const modeIcon = document.getElementById("mode-icon");



  const savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
      applyDarkMode();
  } else {
      applyLightMode();
  }

  modeToggle.addEventListener("click", () => {
      const isDarkMode = document.documentElement.style.getPropertyValue("--background-color") === "black";
      if (isDarkMode) {
          applyLightMode();
          localStorage.setItem("theme", "light");
      } else {
          applyDarkMode();
          localStorage.setItem("theme", "dark");
      }
  });


  function applyDarkMode() {
      document.documentElement.style.setProperty("--background-color", "black");
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--nav-background", "#333");
      document.documentElement.style.setProperty("--nav-text-color", "white");
      modeIcon.src = "https://cdn2.iconfinder.com/data/icons/accessibility-6/24/dark_light_mode_night_lamp_bulb_ui-512.png";

  }

  function applyLightMode() {
      document.documentElement.style.setProperty("--background-color", "white");
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty("--nav-background", "#f8f9fa");
      document.documentElement.style.setProperty("--nav-text-color", "black");
      modeIcon.src = "https://static.thenounproject.com/png/4808961-200.png";;
  }
});


const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode'); 
});



  
