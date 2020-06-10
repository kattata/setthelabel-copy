


// PINDOWN

let width = window.outerWidth;
let details = document.querySelector(".product-details");
let detailsHeight = details.scrollHeight;
const photos = document.querySelector(".product-photos");
let photosHeight = photos.scrollHeight;
const logo = document.querySelector(".logo");


if (width >= 900) {

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: detailsHeight - photosHeight,
        triggerElement: photos,
        triggerHook: 0.05,

    })
        .setPin(photos)
        .addTo(controller);
}

// CHANGE PICTURES ON CLICK

const smallPictures = document.querySelectorAll(".product-img-small");
const bigPicture = document.querySelector(".product-img-big");

function changePicture(e) {
    const item = e.target;

    if (item.classList[0] === "first-img") {
        bigPicture.src = "../resources/images/2.3.jpg";
    } else if (item.classList[0] === "second-img") {
        bigPicture.src = "../resources/images/2.3.2.jpg";
    } else {
        bigPicture.src = "../resources/images/2.3.3.jpg";
    }
}

smallPictures.forEach(pic => pic.addEventListener('click', changePicture));
