const list = document.querySelector(".lists");
const imgList = Array.from(list.children);
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const btn = document.querySelector(".gallery-carousel-btn")
const dots = Array.from(btn.children)

const imgWidth = imgList[0].getBoundingClientRect().width;

// DISPLAYING THE FIRST IMAGE ON THE SCREEN
const setImgPosition = (img, index) => {
    img.style.left = imgWidth * index + "px";
}
imgList.forEach(setImgPosition);

// MOVING THE IMAGES FRONT N BACK
const moveImg = (list, currentImg, targetImg) => {
    list.style.transform = "translateX(-" + targetImg.style.left + ")";
    currentImg.classList.remove("current-img");
    targetImg.classList.add("current-img");
}

// MOVING THE DOTS FRONT N BACK
const moveDot = (currentDot, targetDot) => {
    currentDot.classList.remove("active");
    targetDot.classList.add("active");
}

// MAKING THE ARROWS HIDE AND DISPLAY
const hideShowArrow = (imgList, prev, next, targetIndex) => {
    if (targetIndex === 0) {
        next.classList.remove("hidden");
        prev.classList.add("hidden");
    }
    else if (targetIndex === imgList.length - 1) {
        next.classList.add("hidden");
        prev.classList.remove("hidden");
    }
    else {
        next.classList.remove("hidden");
        prev.classList.remove("hidden");
    }
}

next.addEventListener("click", () => {
    const currentImg = list.querySelector(".current-img");
    const nextImg = currentImg.nextElementSibling;
    const currentDot = btn.querySelector(".active");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = imgList.findIndex((img) =>
        img === nextImg
    );

    moveImg(list, currentImg, nextImg);
    moveDot(currentDot, nextDot);
    hideShowArrow(imgList, prev, next, nextIndex);
    console.log(nextIndex);
});

prev.addEventListener("click", () => {
    const currentImg = list.querySelector(".current-img");
    const prevImg = currentImg.previousElementSibling;
    const currentDot = btn.querySelector(".active");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = imgList.findIndex((img) =>
        img === prevImg
    );

    moveImg(list, currentImg, prevImg);
    moveDot(currentDot, prevDot);
    hideShowArrow(imgList, prev, next, prevIndex);
});

btn.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");
    if (!targetDot) {
        return;
    }
    const currentImg = list.querySelector(".current-img");
    const currentDot = btn.querySelector(".active");
    const targetIndex = dots.findIndex((dot) =>
    dot === targetDot
    );
    const targetImg = imgList[targetIndex]
    console.log(targetImg);

    moveImg(list, currentImg, targetImg);
    moveDot(currentDot, targetDot);
    hideShowArrow(imgList, prev, next, targetIndex);
})