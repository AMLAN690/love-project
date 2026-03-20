let current = 0;

// 💖 5 Slides (2 images each)
let slides = [
    {
        images: ["images/pic1.jpeg", "images/pic2.jpeg"],
        text: "Hey... I know I messed up 😔"
    },
    {
        images: ["images/pic3.jpeg", "images/pic4.jpeg"],
        text: "But every moment with you means everything ❤️"
    },
    {
        images: ["images/pic5.jpeg", "images/pic6.jpeg"],
        text: "I miss your smile... your voice 🥺"
    },
    {
        images: ["images/pic7.jpeg", "images/pic8.jpeg"],
        text: "You are my peace and happiness 💕"
    },
    {
        images: ["images/pic9.jpeg", "images/pic10.jpeg"],
        text: "Please forgive me... I truly love you ❤️"
    }
];

// ▶️ Start
function startStory() {
    document.getElementById("intro").style.display = "none";
    document.querySelector(".container").style.display = "block";

    document.getElementById("music").play();
    showSlide(current);
}

// 📸 Show slide
function showSlide(index) {
    document.getElementById("img1").src = slides[index].images[0];
    document.getElementById("img2").src = slides[index].images[1];
    typeText(slides[index].text);
}

// ✍️ Typing effect
function typeText(text) {
    let i = 0;
    let speed = 40;
    let box = document.getElementById("text");
    box.innerHTML = "";

    let interval = setInterval(() => {
        box.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, speed);
}

// ➡️ Next
function nextSlide() {
    current++;

    if (current >= slides.length) {
        document.querySelector(".container").style.display = "none";
        document.getElementById("finalSlide").style.display = "block";
        return;
    }

    showSlide(current);
}

// ⬅️ Previous
function prevSlide() {
    current--;
    if (current < 0) current = slides.length - 1;
    showSlide(current);
}