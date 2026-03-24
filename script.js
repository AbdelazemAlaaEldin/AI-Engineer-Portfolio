// Initialize Particles
particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        color: { value: "#a67b5b" },
        size: { value: 3 },
        line_linked: { enable: true, color: "#a67b5b" },
        move: { speed: 1.5 }
    }
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.replace('light-theme', 'dark-theme');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

function filterSkills(category) {
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Education, Services, and Projects Expand
// يتم استدعاء هذه الدالة عند الضغط على أي كارد من نوع edu-card
function toggleDetails(card) {
    card.classList.toggle('active');
}

// Arabic Toggle Updated
let isArabic = false;
document.getElementById('lang-toggle').addEventListener('click', function () {
    isArabic = !isArabic;
    this.innerText = isArabic ? "English" : "العربية";

    // تغيير اتجاه الصفحة ولغة الـ HTML
    document.documentElement.setAttribute('lang', isArabic ? 'ar' : 'en');
    document.body.style.direction = isArabic ? "rtl" : "ltr";

    // تحديث الـ placeholders في الفورم
    const inputs = document.querySelectorAll('.contact-side-form input, .contact-side-form textarea');
    inputs.forEach(input => {
        const placeholder = isArabic ? input.getAttribute('data-placeholder-ar') : input.getAttribute('data-placeholder-en');
        if (placeholder) input.setAttribute('placeholder', placeholder);
    });
});