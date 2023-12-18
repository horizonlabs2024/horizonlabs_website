var slides=document.querySelectorAll(".slide")
var counter=0
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
})

const slideimg=()=>{
    if(counter===slides.length-1)
    {
        counter=0
    }
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}

const gonext=()=>{
    counter++
    slideimg()
}
const goprev=()=>{
    counter--
    slideimg()
}