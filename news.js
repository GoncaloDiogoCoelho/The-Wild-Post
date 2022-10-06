// Array of object to list the article from news

const arrayNewsArticlesObject = [
  {
    title: "QUEST 1",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_quest_img_small.png",
    imgBig: "url('articles/article-1_quest_img_big.png')",
    link: "./articles/article-1_quest.html",
  },
  {
    title: "QUEST 2",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_quest_img_small.png",
    imgBig: "url('articles/article-1_quest_img_big.png')",
    link: "./articles/article-1_quest.html",
  },
  {
    title: "QUEST 3",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_quest_img_small.png",
    imgBig: "url('articles/article-1_quest_img_big.png')",
    link: "./articles/article-1_quest.html",
  },
  {
    title: "QUEST 4",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_quest_img_small.png",
    imgBig: "url('articles/article-1_quest_img_big.png",
    link: "./articles/article-1_quest.html",
  },
  {
    title: "QUEST 5",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_quest_img_small.png",
    imgBig: "url('articles/article-1_quest_img_big.png')",
    link: "./articles/article-1_quest.html",
  },
  {
    title: "EVENT 1",
    type: "event",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_event_img_small.jpg",
    imgBig: "url('articles/article-1_event_img_big.jpg')",
    link: "./articles/article-1_event.html",
  },
  {
    title: "EVENT 2",
    type: "event",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_event_img_small.jpg",
    imgBig: "url('articles/article-1_event_img_big.jpg')",
    link: "./articles/article-1_event.html",
  },
  {
    title: "EVENT 3",
    type: "event",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_event_img_small.jpg",
    imgBig: "url('articles/article-1_event_img_big.jpg')",
    link: "./articles/article-1_event.html",
  },
  {
    title: "EVENT 4",
    type: "event",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_event_img_small.jpg",
    imgBig: "url('articles/article-1_event_img_big.jpg')",
    link: "./articles/article-1_event.html",
  },
  {
    title: "EVENT 5",
    type: "event",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "articles/article-1_event_img_small.jpg",
    imgBig: "url('articles/article-1_event_img_big.jpg')",
    link: "./articles/article-1_event.html",
  },
];

const containerListArticles = document.querySelector(".containerListArticles");

// Filling the page with article with the function createCard

function createCard(title, sum, imgUrl, link) {
  const cardArticle = document.createElement("a");
  cardArticle.classList.add("cardArticle", "topic-box");
  cardArticle.href = link;
  containerListArticles.appendChild(cardArticle);

  const divCardImage = document.createElement("img");
  divCardImage.classList.add("cardImage");
  divCardImage.src = imgUrl;
  cardArticle.appendChild(divCardImage);

  const divCardText = document.createElement("div");
  const divCardTitle = document.createElement("h4");
  const divCardSum = document.createElement("p");
  divCardText.classList.add("divCardText");
  divCardTitle.classList.add("divCardTitle", "report-title");
  divCardSum.classList.add("divCardSum", "article-content");
  divCardTitle.innerHTML = title;
  divCardSum.innerHTML = sum;
  divCardText.appendChild(divCardTitle);
  divCardText.appendChild(divCardSum);
  cardArticle.appendChild(divCardText);
}

//Loop which launch at loading

for (i = 0; i < arrayNewsArticlesObject.length; i++) {
  createCard(
    arrayNewsArticlesObject[i].title,
    arrayNewsArticlesObject[i].resume,
    arrayNewsArticlesObject[i].img,
    arrayNewsArticlesObject[i].link
  );
}

//Part reserve for the tag selection using again the createCard function

const tagQuests = document.querySelector(".tagQuests");
const tagEvents = document.querySelector(".tagEvents");
const tagAll = document.querySelector(".tagAll");

tagQuests.onclick = function () {
  containerListArticles.innerHTML = "";
  for (i = 0; i < arrayNewsArticlesObject.length; i++) {
    if (arrayNewsArticlesObject[i].type == "quest") {
      createCard(
        arrayNewsArticlesObject[i].title,
        arrayNewsArticlesObject[i].resume,
        arrayNewsArticlesObject[i].img
      );
    }
  }
};

tagEvents.onclick = function () {
  containerListArticles.innerHTML = "";
  for (i = 0; i < arrayNewsArticlesObject.length; i++) {
    if (arrayNewsArticlesObject[i].type == "event") {
      createCard(
        arrayNewsArticlesObject[i].title,
        arrayNewsArticlesObject[i].resume,
        arrayNewsArticlesObject[i].img
      );
    }
  }
};

tagAll.onclick = function () {
  containerListArticles.innerHTML = "";
  for (i = 0; i < arrayNewsArticlesObject.length; i++) {
    createCard(
      arrayNewsArticlesObject[i].title,
      arrayNewsArticlesObject[i].resume,
      arrayNewsArticlesObject[i].img
    );
  }
};

//Part of code which display the random article tilde on the top

const randomArticleTop = document.querySelector(".randomTop");
const randomArticleIndex = Math.floor(
  Math.random() * arrayNewsArticlesObject.length
);
const titleTopRandom = document.createElement("h3");
const sumTopRandom = document.createElement("p");
const readMore = document.createElement("a");

titleTopRandom.innerHTML = arrayNewsArticlesObject[randomArticleIndex].title;
sumTopRandom.innerHTML = arrayNewsArticlesObject[randomArticleIndex].resume;
randomArticleTop.style.backgroundImage =
  arrayNewsArticlesObject[randomArticleIndex].imgBig;
titleTopRandom.classList.add("titleTopRandom");
sumTopRandom.classList.add("sumTopRandom");
readMore.href = arrayNewsArticlesObject[randomArticleIndex].link;
readMore.innerHTML = "<p>Read more...</p>";
randomArticleTop.appendChild(titleTopRandom);
randomArticleTop.appendChild(sumTopRandom);
randomArticleTop.appendChild(readMore);
