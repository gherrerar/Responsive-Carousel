window.onload = function(){
    location.href = "#slide_1"
}

let thumbs = document.querySelectorAll(".image-cell")

for (let i = 0; i < thumbs.length; i++){

    thumbs[i].addEventListener("click", function(){
        let current = document.querySelector(".selected")
        current.classList.remove("selected")
        this.classList.add("selected")
    })
}

let modal = document.querySelector(".modal-target")
let originImg = document.querySelectorAll(".slides > img")
let modalImages = document.querySelectorAll(".modalImg")
let caption = document.querySelectorAll(".caption")

for (let i = 0; i < originImg.length; i++){

    originImg[i].addEventListener("click", function(){
        modal.style.display = "flex"
        caption[i].innerHTML = this.alt

        let currentImg = document.querySelector(".active")
        currentImg.classList.remove("active")
        modalImages[i].classList.add("active")
    })
}

let closeBtn = document.getElementsByTagName("span")[0]
closeBtn.addEventListener("click", function(){
    modal.classList.add("hide")
    modal.style.display = "none"
})