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
    event.preventDefault(); // Mencegah aksi default (navigasi langsung)
    
    // Temukan elemen target berdasarkan id
    const targetSection = document.getElementById("aboutMeSection");
  
    // Lakukan scroll dengan efek halus
    targetSection.scrollIntoView({
      behavior: "smooth", // Animasi smooth scrolling
      block: "start", // Posisikan di bagian atas layar
    });
  });

  document.getElementById("homeLink").addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah aksi default (navigasi langsung)
    
    // Temukan elemen target berdasarkan id
    const targetSection = document.getElementById("hero");
  
    // Lakukan scroll dengan efek halus
    targetSection.scrollIntoView({
      behavior: "smooth", // Animasi smooth scrolling
      block: "start", // Posisikan di bagian atas layar
    });
  });

 // Ambil elemen modal
const modal = document.getElementById("skillsModal");
const closeModal = document.querySelector(".close");

// Ambil semua elemen yang memiliki kelas "trigger-modal"
const triggers = document.querySelectorAll(".trigger-modal");

// Tambahkan event listener ke setiap trigger
triggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex"; // Tampilkan modal
  });
});

// Event untuk menutup modal saat tombol 'X' diklik
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Event untuk menutup modal jika user klik area luar modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("mode-toggle");
  const modeIcon = document.getElementById("mode-icon");


  // Periksa mode yang tersimpan di localStorage
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
      applyDarkMode();
  } else {
      applyLightMode();
  }

  // Event listener untuk toggle mode
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

  // Fungsi untuk menerapkan Dark Mode
  function applyDarkMode() {
      document.documentElement.style.setProperty("--background-color", "black");
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--nav-background", "#333");
      document.documentElement.style.setProperty("--nav-text-color", "white");

  }

  function applyLightMode() {
      document.documentElement.style.setProperty("--background-color", "white");
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty("--nav-background", "#f8f9fa");
      document.documentElement.style.setProperty("--nav-text-color", "black");
      modeIcon.src = "https://cdn2.iconfinder.com/data/icons/accessibility-6/24/dark_light_mode_night_lamp_bulb_ui-512.png";
  }
});


const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode'); 
});



  