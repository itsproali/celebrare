const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const carouselImages = document.getElementById("carousel-images");

const images = ["assets/Page1.jpg", "assets/Page2.jpg", "assets/Page3.jpg"];

let imageIndex = 0;

carouselImages.innerHTML = `
<div class="image-wrapper">
    <img src=${images[imageIndex]} alt="carousel-image">
</div>
`;

// Display First Image
btn1.addEventListener("click", () => {
  imageIndex = 0;
  carouselImages.innerHTML = `
    <div class="image-wrapper">
        <img src=${images[imageIndex]} alt="carousel-image">
    </div>
    `;
  btn1.classList.add("active-button");
  btn2.classList.remove("active-button");
  btn3.classList.remove("active-button");
});

// Display Second Image
btn2.addEventListener("click", () => {
  imageIndex = 1;
  carouselImages.innerHTML = `
    <div class="image-wrapper">
        <img src=${images[imageIndex]} alt="carousel-image">
    </div>
    `;
  btn2.classList.add("active-button");
  btn1.classList.remove("active-button");
  btn3.classList.remove("active-button");
});

// Display Third Image
btn3.addEventListener("click", () => {
  imageIndex = 2;
  carouselImages.innerHTML = `
    <div class="image-wrapper">
        <img src=${images[imageIndex]} alt="carousel-image">
    </div>
    `;
  btn3.classList.add("active-button");
  btn1.classList.remove("active-button");
  btn2.classList.remove("active-button");
});
