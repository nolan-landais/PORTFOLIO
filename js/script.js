// ✅ Mode sombre/clair avec sauvegarde locale et transition fluide
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.innerHTML = "🌙";
    } else {
        themeToggle.innerHTML = "☀️";
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "☀️";
        }
    });
});

// ✅ Effet d’agrandissement des images en plein écran avec transition fluide
document.addEventListener("DOMContentLoaded", function () {
    // Création de la lightbox si elle n'existe pas déjà
    let lightbox = document.getElementById("lightbox");
    if (!lightbox) {
        lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `
            <span class="close">&times;</span>
            <img class="lightbox-content" id="lightbox-img" src="">
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector("#lightbox .close");

    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightbox.classList.add("active"); // Ajoute la classe active
            lightboxImg.src = this.src; // ✅ Définit l’image correctement
        });
    });

    // ✅ Fermer la lightbox avec le bouton "X"
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
        lightbox.classList.remove("active");
        lightboxImg.src = ""; // Nettoie l'image pour éviter les erreurs de chargement
    });

    // ✅ Fermer la lightbox en cliquant en dehors de l'image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            lightbox.classList.remove("active");
            lightboxImg.src = ""; // Nettoie l'image
        }
    });
});



// ✅ Effet d'apparition progressive des éléments au défilement
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// ✅ Animation d'écriture dynamique pour le hero
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typewriter");
    if (textElement) {
        const text = "Nolan Landais";
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    }
});
