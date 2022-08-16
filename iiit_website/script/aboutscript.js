
var aboutMsg = document.querySelectorAll(".aboutleftCont .msg");
var msgCont = document.querySelectorAll(".aboutrightCont .aboutText");

for (let i = 0; i < aboutMsg.length; i++) {
    aboutMsg[i].addEventListener("click", function () {
        
        // for(let i=0;i<msgCont.length;i++){
        //     msgCont[i].style.display = "none"; 
        // }
        document.querySelector(".activeBtnMsg").classList.remove("activeBtnMsg");
        aboutMsg[i].classList.add("activeBtnMsg");   
        
        msgCont.forEach(el => {
            el.style.display = "none"; 
        });
        msgCont[i].style.display = "block";
        


    });
};

// aboutMsg.forEach(el => {
//     el.addEventListener("click", function () {
//         navCont.querySelector(".activeNav").classList.remove("activeNav");
//         el.classList.add("activeNav");
//         msgCont[el].style.display = "none";
//     })

// });