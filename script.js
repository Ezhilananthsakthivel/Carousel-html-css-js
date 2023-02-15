let sposition = 0
const sliders = document.querySelectorAll(".slider-item")
const stotel = sliders.length
const previous = document.querySelector("#previous")
const next = document.querySelector("#next")

previous.addEventListener('click', function () {
    if (sposition == 0) sposition = stotel - 1
    else sposition--
    updateposition()

})

next.addEventListener('click', function () {
    if (sposition == stotel - 1) sposition = 0
    else sposition++
    updateposition()
})

function updateposition() {
    sliders.forEach(slide => {
        slide.classList.remove('active')
        slide.classList.add('hidden')
    })
    sliders[sposition].classList.add('active')

    dot.forEach(d => {
        d.classList.remove('dot-active')
    })

    dot[sposition].classList.add('dot-active')
}

const dots = document.querySelector(".dots")
sliders.forEach(slide => {
    const dot = document.createElement("div")
    dot.classList.add('dot')
    dots.appendChild(dot)
})
const dot = document.querySelectorAll('.dot')
dot[sposition].classList.add('dot-active')

dot.forEach((d, i) => {
    d.addEventListener('click', function () {
        sposition = i;
        updateposition()
    })
})

setInterval(()=>{
    if(sposition == stotel-1) sposition=0
    else sposition++ 
    updateposition()
},5000)
