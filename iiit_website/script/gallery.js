var smallimg = document.querySelectorAll(".smallimgCont img");
var smallImgCont = document.querySelector(".smallimgCont");
var largeimg = document.querySelector(".bigimgCont img");
var prePhoto = document.querySelector(".prePhoto");
var nextPhoto = document.querySelector(".nextPhoto");

console.log(smallimg[2].src);
console.log(largeimg.src);
console.log(prePhoto);
console.log(nextPhoto);



// for (let i = 0; i < smallimg.length; i++) {
//     smallimg[i].addEventListener("click", function () {
//         document.querySelector(".smallimgCont .activePhoto").classList.remove("activePhoto");
//         smallimg[i].classList.add("activePhoto");
//         largeimg.src = smallimg[i].src;
//     })
// }

smallimg.forEach(el => {
    el.addEventListener("click", function () {
        document.querySelector(".smallimgCont .activePhoto").classList.remove("activePhoto");
        el.classList.add("activePhoto");
        largeimg.src = el.src;
    })
});


prePhoto.addEventListener("click", function () {

    largeimg.src = document.querySelector(".activePhoto").previousElementSibling.src;
    smallImgCont.querySelector(".smallimgCont .activePhoto").previousElementSibling.classList.add("activePhoto");
    smallImgCont.querySelectorAll(".activePhoto").classList.remove("activePhoto");


    // if(smallimg[1].classList=="activePhoto"){
    //     smallimg[1].classList.remove("activePhoto");
    //     smallimg[0].classList.add("activePhoto");
    //     largeimg.src=smallimg[0].src;

    // }else if(smallimg[2].classList=="activePhoto"){
    //     smallimg[2].classList.remove("activePhoto");
    //     smallimg[1].classList.add("activePhoto");
    //     largeimg.src=smallimg[1].src;

    // }else if(smallimg[3].classList=="activePhoto"){
    //     smallimg[3].classList.remove("activePhoto");
    //     smallimg[2].classList.add("activePhoto");
    //     largeimg.src=smallimg[2].src;

    // }else if(smallimg[4].classList=="activePhoto"){
    //     smallimg[4].classList.remove("activePhoto");
    //     smallimg[3].classList.add("activePhoto");
    //     largeimg.src=smallimg[3].src;

    // }else if(smallimg[5].classList=="activePhoto"){
    //     smallimg[5].classList.remove("activePhoto");
    //     smallimg[4].classList.add("activePhoto");
    //     largeimg.src=smallimg[4].src;

    // }else if(smallimg[6].classList=="activePhoto"){
    //     smallimg[6].classList.remove("activePhoto");
    //     smallimg[5].classList.add("activePhoto");
    //     largeimg.src=smallimg[5].src;

    // }else if(smallimg[7].classList=="activePhoto"){
    //     smallimg[7].classList.remove("activePhoto");
    //     smallimg[6].classList.add("activePhoto");
    //     largeimg.src=smallimg[6].src;

    // }
});



nextPhoto.addEventListener("click", function () {

        document.querySelector(".smallimgCont .activePhoto").nextElementSibling.classList.add("activePhoto");
        document.querySelector(".smallimgCont .activePhoto").classList.remove("activePhoto");
        largeimg.src = document.querySelector(".activePhoto").nextElementSibling.src;


    // if(smallimg[0].classList=="activePhoto"){
    //     smallimg[0].classList.remove("activePhoto");
    //     smallimg[1].classList.add("activePhoto");
    //     largeimg.src=smallimg[1].src;

    // }else if(smallimg[1].classList=="activePhoto"){
    //     smallimg[1].classList.remove("activePhoto");
    //     smallimg[2].classList.add("activePhoto");
    //     largeimg.src=smallimg[2].src;

    // }else if(smallimg[2].classList=="activePhoto"){
    //     smallimg[2].classList.remove("activePhoto");
    //     smallimg[3].classList.add("activePhoto");
    //     largeimg.src=smallimg[3].src;

    // }else if(smallimg[3].classList=="activePhoto"){
    //     smallimg[3].classList.remove("activePhoto");
    //     smallimg[4].classList.add("activePhoto");
    //     largeimg.src=smallimg[4].src;

    // }else if(smallimg[4].classList=="activePhoto"){
    //     smallimg[4].classList.remove("activePhoto");
    //     smallimg[5].classList.add("activePhoto");
    //     largeimg.src=smallimg[5].src;

    // }else if(smallimg[5].classList=="activePhoto"){
    //     smallimg[5].classList.remove("activePhoto");
    //     smallimg[6].classList.add("activePhoto");
    //     largeimg.src=smallimg[6].src;

    // }else if(smallimg[6].classList=="activePhoto"){
    //     smallimg[6].classList.remove("activePhoto");
    //     smallimg[7].classList.add("activePhoto");
    //     largeimg.src=smallimg[7].src;
    // }
})


