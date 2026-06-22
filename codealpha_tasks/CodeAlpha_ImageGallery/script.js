const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

function showImage(index){
    lightbox.style.display = "flex";
    lightboxImg.src = images[index].src;
}

images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        currentIndex = index;
        showImage(currentIndex);
    });
});

closeBtn.addEventListener("click",()=>{
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click",()=>{
    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);
});

prevBtn.addEventListener("click",()=>{
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
});

window.addEventListener("click",(e)=>{
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){
            nextBtn.click();
        }

        if(e.key === "ArrowLeft"){
            prevBtn.click();
        }

        if(e.key === "Escape"){
            lightbox.style.display = "none";
        }
    }
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

document.getElementById("count").textContent =
document.querySelectorAll(".gallery img").length;

const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {

            if(filter === "all"){
                item.style.display = "block";
            } else {
                item.style.display =
                    item.classList.contains(filter)
                    ? "block"
                    : "none";
            }

        });

    });
});