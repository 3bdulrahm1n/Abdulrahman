
// ===== Scroll Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections with fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// ===== Tabs Functionality =====
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the tab data
        const tabName = button.getAttribute('data-tab');
        console.log('Active tab:', tabName);
        
        // You can add logic here to show/hide different project categories
    });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Log the form data (in a real application, you would send this to a server)
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ===== Header Background on Scroll =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 8, 8, 0.98)';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 8, 8, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// ===== Parallax Effect for Cards =====
const cards = document.querySelectorAll('.card-phone');

window.addEventListener('mousemove', (e) => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        } else {
            card.style.transform = '';
        }
    });
});

// ===== Project Cards Click Handler =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.project-title').textContent;
        console.log('Clicked project:', title);
        
        // You can add logic here to show project details or navigate to project page
        alert(`Opening project: ${title}`);
    });
});

// ===== Animate Skill Badges on Scroll =====
const skillBadges = document.querySelectorAll('.skill-badge');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeIn 0.5s ease-out forwards';
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

skillBadges.forEach(badge => {
    skillObserver.observe(badge);
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});


function sendEmail(){
    const templateparams = {
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        message:document.querySelector("#message").value
    };
    emailjs
    .send("service_97532as","template_vv74bsm",templateparams)
    .then(() => {
        alert("Email sent successfully!");
        })
        .catch((error)=>{
            console.log("Error sending email:",error);
            alert("Failed to send email, Please try again.")
            });
}

// navbar mechanism for smaller devices
const navbarToggle = document.querySelector(".nav-toggle")
const navbar = document.querySelector(".nav")

navbarToggle.addEventListener('click',()=>{
    navbarToggle.classList.toggle('active');
    navbar.classList.toggle('active');
})
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, pts = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

for (let i = 0; i < 80; i++) {
  pts.push({
    x: Math.random() * 2000,
    y: Math.random() * 1200,
    r: Math.random() * 1.2 + 0.3,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    a: Math.random() * 0.5 + 0.1
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H);
  pts.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(235, 212, 255,${p.a})`;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();


console.log('Portfolio loaded successfully!');

