const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");
const faqBtns = document.querySelectorAll(".faq-btn");
const faqContents = document.querySelectorAll(".faq-content");
const faqIcons = document.querySelectorAll(".faq-icon");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-hidden");
    menu.classList.toggle("menu-visible");
    menuBtn.classList.toggle("open");
});

// Toggle FAQ Dropdown
faqBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const content = faqContents[index];
        const icon = faqIcons[index];

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = "-";
        }
    });
});

// lucide.createIcons();