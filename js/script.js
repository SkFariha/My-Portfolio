const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.onclick = () => {
    nav.classList.toggle("active");
};

document.querySelector("form").addEventListener("submit", function(){
    alert("Message sent successfully ✅");
});