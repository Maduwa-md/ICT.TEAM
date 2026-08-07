
// Page Load Animation

window.addEventListener("load", () => {

    const box = document.querySelector(".container");

    box.style.opacity = "0";
    box.style.transform = "translateY(50px)";


    setTimeout(() => {

        box.style.transition = "1s";

        box.style.opacity = "1";

        box.style.transform = "translateY(0)";


    }, 300);


});



// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });

});
const cards = document.querySelectorAll(".portfolio-card img");
const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");
const closeBtn = document.querySelector(".close");

cards.forEach(img => {
    img.onclick = () => {
        preview.style.display = "flex";
        previewImg.src = img.src;
    };
});

closeBtn.onclick = () => {
    preview.style.display = "none";
};

preview.onclick = (e) => {
    if (e.target === preview) {
        preview.style.display = "none";
    }
};
