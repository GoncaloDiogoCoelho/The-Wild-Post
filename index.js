//*Image Carousel
// Creation of the section that will contain the carousel images / articles
const carousel = document.createElement("section");
carousel.classList.add("carousel");
main.appendChild(carousel);

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

function createSlides(numbers, mainTitle, imageURL, alternativeText, text) {
//Creation of the slides itself
    const slides = document.createElement("div");
    slides.classList.add("slides");
    carousel.appendChild(slides);

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
};

//This loop will repeat the function above for each slide and respective content
for (let i = 0; i < slidesContent.length; i++) {
    createSlides(slidesContent[i].number, slidesContent[i].title, slidesContent[i].picture, slidesContent[i].alternative, slidesContent[i].text);
};



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