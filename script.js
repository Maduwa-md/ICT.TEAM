
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
