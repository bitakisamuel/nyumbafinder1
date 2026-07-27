// ============================
// MOBILE MENU
// ============================

const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ============================
// CLOSE MENU WHEN LINK CLICKED
// ============================

const links = document.querySelectorAll("#navbar a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menu.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});

// ============================
// STICKY HEADER
// ============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow =
        "0 2px 15px rgba(0,0,0,.08)";

    }

});

// ============================
// SCROLL TO TOP BUTTON
// ============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", ()=>{

if(window.scrollY > 500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click", ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ============================
// SEARCH BUTTON
// ============================

const searchBtn =
document.querySelector(".search-box button");

if(searchBtn){

searchBtn.addEventListener("click", ()=>{

window.location.href="properties.html";

});

}

// ============================
// PROPERTY CARD ANIMATION
// ============================

const cards =
document.querySelectorAll(".property-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".8s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*200);

});

// ============================
// CATEGORY HOVER EFFECT
// ============================

const categories =
document.querySelectorAll(".category");

categories.forEach(category=>{

category.addEventListener("mouseenter",()=>{

category.style.background="#0066ff";

category.style.color="white";

});

category.addEventListener("mouseleave",()=>{

category.style.background="white";

category.style.color="#222";

});

});

// ============================
// BUTTON HOVER EFFECT
// ============================

const buttons =
document.querySelectorAll("button,.login-btn,.property-info a");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ============================
// FADE SECTIONS ON SCROLL
// ============================

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top =
section.getBoundingClientRect().top;

if(top < window.innerHeight-100){

section.style.opacity="1";

section.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition=".8s";

});

// ============================
// LOADER
// ============================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="1s";

// ==========================
// PROPERTY SEARCH
// ==========================

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const location = document
            .getElementById("searchLocation")
            .value
            .toLowerCase();

        const type = document
            .getElementById("searchType")
            .value;

        const properties = document.querySelectorAll(".property-card");

        properties.forEach(function(property){

            const propertyLocation = property.dataset.location.toLowerCase();

            const propertyType = property.dataset.type;

            const matchLocation =
                location === "" ||
                propertyLocation.includes(location);

            const matchType =
                type === "" ||
                propertyType === type;

            if(matchLocation && matchType){

                property.style.display = "block";

            }else{

                property.style.display = "none";

            }

        });

    });

}

function changeImage(image){
    document.getElementById("mainImage").src = image.src;
}

