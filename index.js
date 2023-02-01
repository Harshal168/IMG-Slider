const nextEl = document.querySelector(".next")

const prevEl = document.querySelector(".prev")

const imgConEl = document.querySelector(".img-con")

const imgsEl = document.querySelectorAll("img")


let currentImg = 1

let timeout;

nextEl.addEventListener("click" , ()=>{
 currentImg++
 clearTimeout(timeout)
 updateImg()
})

prevEl.addEventListener("click",()=>{
    currentImg--
    clearTimeout(timeout)
    updateImg()
})

updateImg()

function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgsEl.length;
}
 imgConEl.style.transform = `translateX(-${(currentImg - 1) * 700}px)`
 
 timeout = setTimeout(()=>{
     currentImg++
     updateImg()
    },3000)
}