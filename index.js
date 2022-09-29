// Creation of the section that will contain the carousel images / articles
const carousel = document.createElement("section");
carousel.classList.add("carousel");
main.appendChild(carousel);

//Object with the contents of each slide
const slidesContent = [
    {
        number: "1/3",
        picture: ,
        alternative: ,
        description: ""
    }, 
    {
        number: "2/3",
        picture: ,
        alternative: ,
        description: ""
    }, 
    {
        number: "3/3",
        picture: ,
        alternative: ,
        description: ""
    }
];

function createSlides(numbers, imageURL, alternativeText, text) {
//Creation of the slides itself
    const slides = document.createElement("div");
    slides.classList.add("slides");
    carousel.appendChild(slides);

//Creation of the content inside the slides
    const numbering = document.createElement("div");
    numbering.classList.add("numbering");
    numbering.innerHTML = `${numbers}`;
    slides.appendChild(numbering);

    const carouselImages = document.createElement("img");
    carouselImages.classList.add("carousel-images");
    carouselImages.src = `${imageURL}`;
    carouselImages.alt = `${alternativeText}`;
    slides.appendChild(carouselImages);

    const subtitles = document.createElement("div");
    subtitles.classList.add("subtitles");
    subtitles.innerHTML = `${text}`;
    slides.appendChild(subtitles);
};

//This loop will repeat the function above for each slide and respective content
for (let i = 0; i < slidesContent.length; i++) {
    createSlides(slidesContent[i].number, slidesContent[i].picture, slidesContent[i].alternative, slidesContent[i].text);
};