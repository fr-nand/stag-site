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

        let x = (Math.random() - 0.5) * 200 + "px";
        let y = (Math.random() - 0.5) * 200 + "px";

        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";

        dot.style.setProperty("--x", x);
        dot.style.setProperty("--y", y);

        document.body.appendChild(dot);

        setTimeout(() => dot.remove(), 1000);
    }
}
