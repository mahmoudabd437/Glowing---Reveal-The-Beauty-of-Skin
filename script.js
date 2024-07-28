let nav = document.querySelector("nav");
let overlay = document.querySelector(".overlay");
let up = document.querySelector(".up");
let section1 = document.querySelector(".section-1");
let collection = document.querySelector(".collection");
let seller = document.querySelector(".best-seller");




function open_menu() {
    overlay.classList.toggle("active");
    nav.classList.toggle("active");
}

function close_menu() {
    overlay.classList.remove("active");
    nav.classList.remove("active");
}


window.addEventListener("scroll", () => {
    if (scrollY > 0) {
        up.classList.add("active");
    } else {
        up.classList.remove("active");
    }
});

function goUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// reveal
let revealArr = [".section-1", ".collection", ".best-seller"];
for (let i = 0; i < revealArr.length; i++) {
    ScrollReveal().reveal(revealArr[i], {
        duration: 500,
        origin: 'bottom',
        distance: '10px',
        delay: 100,
        easing: 'ease',
    });
}


// }
// ScrollReveal().reveal(".best-seller", {
//     duration: 500,
//     origin: 'bottom',
//     distance: '10px',
//     delay: 100,
//     easing: 'ease',
//     reset: true
// });
// ScrollReveal().reveal(".section-1", {
//     duration: 500,
//     origin: 'bottom',
//     distance: '10px',
//     delay: 100,
//     easing: 'ease',
//     reset: true
// });
// ScrollReveal().reveal(".collection", {
//     duration: 500,
//     origin: 'bottom',
//     distance: '10px',
//     delay: 100,
//     easing: 'ease',
//     reset: true
// });