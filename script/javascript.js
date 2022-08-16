var menuBtn = document.querySelector(".menuBtn");
var menuCloseBtn = document.querySelector(".closeMenu");
var navul = document.querySelector(".navul");

menuBtn.addEventListener("click", function () {
    if (navul.style.left = 100) {
        navul.style.left = 0;
    }
});

menuCloseBtn.addEventListener("click", function () {
    navul.style.left = "100%";
})

// .............script for active navlist. ................. 


var navlist = document.querySelectorAll(".navlist");
var contantBox = document.querySelectorAll(".navlist-option");



for (let i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener("click", function () {


        document.querySelector(".activeNav").classList.remove("activeNav");
        navlist[i].classList.add("activeNav");

        for (let a = 0; a < contantBox.length; a++) {

            if (navul.style.left = "0px") {
                navul.style.left = "100%";
            }
            contantBox[a].style.display = "none";
        }

        contantBox[i].style.display = "block";
    })
}
