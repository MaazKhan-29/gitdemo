let menu = document.querySelector(".menubar");
let icon = document.querySelector(".fa-solid");
let icon_div = document.querySelector(".hamburger");
let body = document.querySelector(".body");
function menubar_open() {
    menu.style.display = "block";
    icon.classList.replace("fa-bars", "fa-xmark");
    body.style.overflow = "hidden";
    if (icon_div.className.includes("hamburger")) {
        icon_div.classList.replace("hamburger", "back")
        icon_div.setAttribute('onClick', "menubar_close()");
    }
}
function menubar_close() {
    menu.style.display = "none";
    body.style.overflow = "auto";
    icon.classList.replace("fa-xmark", "fa-bars");
    if (icon_div.className.includes("back")) {
        icon_div.classList.replace("back", "hamburger")
        icon_div.setAttribute('onClick', "menubar_open()");
    }
}











const canvas = document.getElementById("techCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas to fit screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call resizeCanvas to set initial size
resizeCanvas();

// Particle class to create dots
class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    // Update particle's position
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    // Draw particle (circle)
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Check if particle is outside canvas bounds
    isOutside() {
        return this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height;
    }
}

// Function to connect particles with lines
function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
            if (dist < 150) {
                ctx.strokeStyle = `rgba(0, 255, 255, ${(1 - dist / 150)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// Create random particles
function createParticles() {
    const colors = ['#00FFAB', '#00F0FF', '#00FFEA', '#FFD700', '#FF00D0'];
    const size = Math.random() * 2 + 2;
    const randomX = Math.random() * canvas.width;
    const randomY = Math.random() * canvas.height;
    particles.push(new Particle(randomX, randomY, size, colors[Math.floor(Math.random() * colors.length)]));
}

let particles = [];

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each particle
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove particles that go outside of the canvas
        if (particle.isOutside()) {
            particles.splice(index, 1);
        }
    });

    // Connect particles with lines if they're close to each other
    connectParticles();

    // Create new particles randomly
    if (particles.length < 100) {
        createParticles();
    }

    requestAnimationFrame(animate);
}

// Resize event
window.addEventListener('resize', resizeCanvas);

// Start animation
animate();











    document.addEventListener("DOMContentLoaded", function () {
        var typed = new Typed("#My-name", {
            strings: ["Maaz Khan"],
                    typeSpeed: 60,  // Typing speed
                    backSpeed:0, // Backspacing speed
                loop: false,     // Loop animation
                showCursor: true, // Show typing cursor
            cursorChar: "|", // Custom cursor character
            // backDelay: Infinity,
            startDelay:2000,
                });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var typed = new Typed("#typed-output", {
            // strings: ["I am a second-year student of Electronics and Computer Engineering. I have skills in frontend web development, including designing and developing websites.My expertise is in HTML, CSS, and JavaScript.I am passionate about creating user - friendly web applications."],
            strings:["Frontend Developer | Passionate about building scalable web applications with React &amp; MERN Stack "],
                    typeSpeed: 1,  // Typing speed
                    backSpeed:0, // Backspacing speed
                loop: false,     // Loop animation
                showCursor: true, // Show typing cursor
            cursorChar: "|", // Custom cursor character
            // backDelay: Infinity,
            startDelay:3500,
                });
    });
    
    


































































