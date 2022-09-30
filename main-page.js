//*Topic section
// Creation of the section that will contain the topics and respective articles
const main = document.querySelector("main");

const topics = document.createElement("section");
topics.classList.add("topics-container");
main.appendChild(topics);

//Object with the contents of each topic
const topicsContent = [
    {
        topicTitle: "News / Events",
        articleTitle: "Event 1",
        picture: "./src/article-1_img_big.jpg",
        alternative: "A crowd running the marathon",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae, porro iure tempora totam sed officiis ut odio dolore id in beatae perspiciatis."
    }, 
    {
        topicTitle: "News / Quests",
        articleTitle: "Quest 1",
        picture: "./articles/article-2_quest_img_big.png",
        alternative: "Some of the resources that students have available in Wild Code School",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae, porro iure tempora totam sed officiis ut odio dolore id in beatae perspiciatis."
    }, 
    {
        topicTitle: "Resources / CSS",
        articleTitle: "CSS 1",
        picture: "./src/article-1_img_small.png",
        alternative: "CSS logo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae, porro iure tempora totam sed officiis ut odio dolore id in beatae perspiciatis."
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

        const textBox = document.createElement("div");
        textBox.classList.add("text-box");
        topicBox.appendChild(textBox);

        const reportTitle = document.createElement("h3");
        reportTitle.classList.add("report-title");
        reportTitle.innerHTML = `${articleTitle}`;
        textBox.appendChild(reportTitle);
    
        const articleContent = document.createElement("p");
        articleContent.classList.add("article-content");
        articleContent.innerHTML = `${paragraphs}`;
        textBox.appendChild(articleContent);
    };

//This loop will repeat the function above for each slide and respective content
for (let j = 0; j < topicsContent.length; j++) {
    createTopics(topicsContent[j].topicTitle, topicsContent[j].picture, topicsContent[j].alternative, topicsContent[j].articleTitle, topicsContent[j].description);
};