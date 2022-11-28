let nav = document.querySelector("nav")
let ind = document.querySelectorAll(".index")
var clicked = true


ind.forEach(index => {
    index.addEventListener("click", () => {
        if(clicked){
            nav.style.width = "100%";
            clicked = false
        }else{
            nav.style.width = "10%";
            clicked = true;
        };     
    });

})






