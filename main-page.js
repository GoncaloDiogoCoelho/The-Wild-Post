//*Image Carousel
//Creation of the section that will contain the carousel images / articles and the dots to choose the slide we want to see
const main = document.querySelector("main");

const carousel = document.createElement("section");
carousel.classList.add("carousel");
main.appendChild(carousel);

const dotBox = document.createElement("div");
dotBox.classList.add("dot-box");
main.appendChild(dotBox);


//Object with the contents of each slide
const slidesContent = [
    {
        number: "1/3",
        title: "",
        picture: "",
        alternative: "",
        description: ""
    }, 
    {
        number: "2/3",
        title: "",
        picture: "",
        alternative: "",
        description: ""
    }, 
    {
        number: "3/3",
        title: "",
        picture: "",
        alternative: "",
        description: ""
    }
];

//Creation of the slides and it's content
function createSlides(numbers, mainTitle, imageURL, alternativeText, text) {
    //Creation of the slides itself
    const slides = document.createElement("div");
    slides.classList.add("slides");
    carousel.appendChild(slides);

    /*Creation of the back and foreword buttons
    const leftButton = document.createElement("a");
    leftButton.classList.add("left-button");
    leftButton.onclick = moveSlides(-1);
    leftButton.innerHTML = "&#10094;";
    slides.appendChild(leftButton);

    const rightButton = document.createElement("a");
    rightButton.classList.add("right-button");
    rightButton.onclick = moveSlides(1);
    rightButton.innerHTML = "&#10095;";
    slides.appendChild(rightButton);*/

    //Creation of the content inside the slides
    const numbering = document.createElement("p");
    numbering.classList.add("numbering");
    numbering.innerHTML = `${numbers}`;
    slides.appendChild(numbering);

    const slideTitle = document.createElement("h1");
    slideTitle.classList.add("slide-title");
    slideTitle.innerHTML = `${mainTitle}`;
    slides.appendChild(slideTitle);

    const carouselImages = document.createElement("img");
    carouselImages.classList.add("carousel-images");
    carouselImages.src = `${imageURL}`;
    carouselImages.alt = `${alternativeText}`;
    slides.appendChild(carouselImages);

    const subtitles = document.createElement("p");
    subtitles.classList.add("subtitles");
    subtitles.innerHTML = `${text}`;
    slides.appendChild(subtitles);

    /*Creation of the dots below the slides to show the slide we choose 
    const individualDot = document.createElement("div");
    individualDot.classList.add("dot");
    individualDot.onclick = currentSlide();
    dotBox.appendChild(individualDot);*/
};


//This loop will repeat the function above for each slide and respective content
for (let i = 0; i < slidesContent.length; i++) {
    createSlides(slidesContent[i].number, slidesContent[i].title, slidesContent[i].picture, slidesContent[i].alternative, slidesContent[i].text);
};

//Function that allow to show the current slide or move them back and foreword
/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dot = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  
  dots[slideIndex-1].className += " active";
} */


//*Topic section
// Creation of the section that will contain the topics and respective articles
const topics = document.createElement("section");
topics.classList.add("topics-container");
main.appendChild(topics);

//Object with the contents of each topic
const topicsContent = [
    {
        topicTitle: "",
        articleTitle: "",
        picture: "",
        alternative: "",
        description: ""
    }, 
    {
        topicTitle: "",
        articleTitle: "",
        picture: "",
        alternative: "",
        description: ""
    }, 
    {
        topicTitle: "",
        articleTitle: "",
        picture: "",
        alternative: "",
        description: ""
    }
];

function createTopics(topicTitle, imageLink, altText, articleTitle, paragraphs) {
    //Creation of one topic section and respective title
        const oneTopic = document.createElement("div");
        oneTopic.classList.add("topic");
        topics.appendChild(oneTopic);

        const oneTopicTitle = document.createElement("h2");
        oneTopicTitle.classList.add("topic-title");
        oneTopicTitle.innerHTML = `${topicTitle}`;
        oneTopic.appendChild(oneTopicTitle);
    
    //Creation of the content inside each topic
        const topicBox = document.createElement("div");
        topicBox.classList.add("topic-box");
        oneTopic.appendChild(topicBox);

        const articleImages = document.createElement("img");
        articleImages.classList.add("article-images");
        articleImages.src = `${imageLink}`;
        articleImages.alt = `${altText}`;
        topicBox.appendChild(articleImages);

        const reportTitle = document.createElement("h3");
        reportTitle.classList.add("slide-title");
        reportTitle.innerHTML = `${articleTitle}`;
        topicBox.appendChild(reportTitle);
    
        const articleContent = document.createElement("p");
        articleContent.classList.add("article-content");
        articleContent.innerHTML = `${paragraphs}`;
        topicBox.appendChild(subtitles);
    };

//This loop will repeat the function above for each slide and respective content
for (let j = 0; j < topicsContent.length; j++) {
    createTopics(topicsContent[j].topicTitle, topicsContent[j].picture, topicsContent[j].alternative, topicsContent[j].articleTitle, topicsContent[j].description);
};