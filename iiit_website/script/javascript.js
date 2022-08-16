var slides = document.getElementsByClassName("H-slide");
var secSlides = document.getElementsByClassName("sec-H-slide");
var secScont = document.getElementById("sec-H-sliderCont");
var closeIcon = document.getElementById("closeDocView");
var nextSlide = document.getElementById("nextslide");


// ............code for active nav with contant.. ........


// ......this 2 is nav Selection. ...........
var navCont = document.getElementById("navCont");
var navli = document.querySelectorAll("#navCont li");

// ..........this are for main containers selection. ... .... ... 

var contDiv = document.querySelectorAll(".contDiv");
var home = document.querySelector(".homeCont");
var about = document.querySelector(".aboutCont");
var contact = document.querySelector(".contactCont");
var course = document.querySelector(".courseCont");
var photogallery = document.querySelector(".photoCont");
var news = document.querySelector(".newsCont");
var publication = document.querySelector(".publiCont");
var placement = document.querySelector(".placementCont");
var download = document.querySelector(".downloadCont");
var assignment = document.querySelector(".assigntCont");
var notice = document.querySelector(".noticeCont");

// .........below code for active nav ... .... ...

// navli.forEach(el => {
//     el.addEventListener("click", function () {
//         navCont.querySelector(".activeNav").classList.remove("activeNav");
//         el.classList.add("activeNav");


//         // ........ code for main contant in website within active nav.... .... ..
//         for (let i = 0; i < contDiv.length; i++) {
//             contDiv[i].style.display = "none";
//         };


//         if (navli[0].className == "activeNav") {
//             home.style.display = "block";
//         } else if (navli[1].classList == "activeNav") {
//             about.style.display = "block";
//         } else if (navli[2].classList == "activeNav") {
//             contact.style.display = "block";
//         } else if (navli[3].classList == "activeNav") {
//             course.style.display = "block";
//         } else if (navli[4].classList == "activeNav") {
//             photogallery.style.display = "block";
//         } else if (navli[5].classList == "activeNav") {
//             news.style.display = "block";
//         } else if (navli[6].classList == "activeNav") {
//             publication.style.display = "block";
//         } else if (navli[7].classList == "activeNav") {
//             placement.style.display = "block";
//         } else if (navli[8].classList == "activeNav") {
//             download.style.display = "block";
//         } else if (navli[9].classList == "activeNav") {
//             assignment.style.display = "block";
//         } else if (navli[10].classList == "activeNav") {
//             notice.style.display = "block";
//         };
//     })
// });

for (let i = 0; i < navli.length; i++) {
    navli[i].addEventListener("click", function () {
        navCont.querySelector(".activeNav").classList.remove("activeNav");
        navli[i].classList.add("activeNav");

        for (let i = 0; i < contDiv.length; i++) {
            contDiv[i].style.display = "none";
        };
        contDiv[i].style.display = "block";

    })
}









// ........code for home 1st image slider ...........


var slideImg = 0;

function fstimgSlider() {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideImg++;
    if (slideImg > slides.length) {
        slideImg = 1;
    }
    slides[slideImg - 1].style.display = 'block';
    setTimeout(fstimgSlider, 2000);
}

fstimgSlider();


// ....code for second image slider ..........

var sec = 0

function secImgSlirde() {
    for (let i = 0; i < secSlides.length; i++) {
        secSlides[i].style.display = "none";
    }
    sec++;
    if (sec > secSlides.length) {
        sec = 1;
    }
    secSlides[sec - 1].style.display = "";
    timeout = setTimeout(secImgSlirde, 2000);

}

secImgSlirde();

var hnext=0
function hslidenext() {


    // .......use this..........

    /* for (let i = 0; i < secSlides.length; i++) {
        secSlides[i].style.display = "none";
    }
    // sec++;
    if (sec > secSlides.length) {
        sec = 1;
    }

    secSlides[sec-1].style.display = "block";        */
    
    // .........or you can use this ............. 
    
    secImgSlirde();
    clearTimeout(timeout);

    // .........or you can use this ............. 
    // hnext++;
    // if(hnext=4){
    //     hnext=0;
    // }
    // secSlides[hnext].style.display = "block";


}

// code for viewing slide ............... 

function stopslide() {
    clearTimeout(timeout);
};

function startslide() {
    timeout = setTimeout(secImgSlirde, 2000);
};


//  ................code for viewing documents..........


function viewDoc() {
    closeIcon.style.display = "block";
    secScont.classList.add("viewCont");
    for (let i = 0; i < secSlides.length; i++) {
        secSlides[i].classList.add("view-slide");
    };
    nextSlide.style.display = "block";

};


closeIcon.addEventListener("click",function(){
    console.log("clicked");

    document.querySelectorAll(".view-slide").classList.remove("view-slide");
    closeIcon.style.display = "none";


    document.querySelector(".viewCont").classList.remove("viewCont");

})