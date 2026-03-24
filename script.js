function startParty() {
    document.getElementById("surprise").classList.remove("hidden");

    // SHOW PHOTOS (you missed this)
    document.querySelector(".photo-container").style.display = "block";

    // Play music
    document.getElementById("music").play();

    // Change title
    document.getElementById("title").innerText = "🎉 Bruderrrrr! 🎉";

    // Fireworks
    setInterval(createFirework, 500);
}

function createFirework() {
    for (let i = 0; i < 20; i++) {
        let dot = document.createElement("div");
        dot.classList.add("firework");

        // Adjust explosion range for desktop/mobile
        let range = window.innerWidth < 600 ? 100 : 200;
        let x = (Math.random() - 0.5) * range + "px";
        let y = (Math.random() - 0.5) * range + "px";

        // Position dot randomly on the screen
        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";

        // Set explode offsets
        dot.style.setProperty("--x", x);
        dot.style.setProperty("--y", y);

        document.body.appendChild(dot);

        setTimeout(() => dot.remove(), 1000);
    }
}
