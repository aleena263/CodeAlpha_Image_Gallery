let buttons = document.querySelectorAll(".filter-buttons button");
let images = document.querySelectorAll(".gallery_item img");
let items = document.querySelectorAll(".gallery_item");

let lightbox = document.getElementById("lightbox");
let lightbox_img = document.querySelector(".lightbox-img");

let close_btn = document.getElementById("close");
let next_btn = document.getElementById("next");
let previouse_btn = document.getElementById("previouse");

let currentIndex = 0;


buttons.forEach(btn => {
    btn.addEventListener("click", function () {

        let filter = btn.textContent.toLowerCase();

        items.forEach(item => {
            if (filter === "all") {
                item.style.display = "block";
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        });

    });
});


images.forEach((img, index) => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightbox_img.src = this.src;
        currentIndex = index;
    });
});


next_btn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightbox_img.src = images[currentIndex].src;
});


previouse_btn.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightbox_img.src = images[currentIndex].src;
});


close_btn.addEventListener("click", function () {
    lightbox.style.display = "none";
});