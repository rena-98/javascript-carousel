const blockItems = document.querySelectorAll(".main-block-item");
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
let index = 0;
function start() {
    if(index >= blockItems.length){
        index = 0;
    }
    if(index < 0) {
        index = blockItems.length - 1 ;
    }
for (let i = 0; i < blockItems.length; i++) {
    blockItems[i].classList.remove("active");
}
blockItems[index].classList.add("active");
}
start();
btnNext.addEventListener("click", ()=>{
    index++;
    start();
});
btnPrevious.addEventListener("click",()=>{
    index--;
    start();
});