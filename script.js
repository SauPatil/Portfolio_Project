// script.js

document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skills-section span");
    
    skills.forEach(skill => {
        skill.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#2c3e50";
            this.style.color = "#fff";
            this.style.transition = "0.3s";
        });

        skill.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#3498db";
            this.style.color = "#fff";
        });
    });
});
