
var courseBtn = document.querySelectorAll(".courseleftDiv .coursebtn");
var courseCont = document.querySelectorAll(".courseRightDiv .courseDetailsCont");


for (let i = 0; i < courseBtn.length; i++) {
    courseBtn[i].addEventListener("click", function () {
        
        courseCont.forEach(el => {
            el.style.display = "none";
        });
        courseCont[i].style.display = "block";
        document.querySelector(".activeBtnCourse").classList.remove("activeBtnCourse");
        courseBtn[i].classList.add("activeBtnCourse");

    })
    
}

