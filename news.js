const arrayNewsArticlesObject = [
  {
    title: "QUEST 1",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "QUEST 2",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "QUEST 3",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "QUEST 4",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "QUEST 5",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "EVENT 1",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_event_img_small.jpg')",
  },
  {
    title: "EVENT 2",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_event_img_small.jpg')",
  },
  {
    title: "EVENT 3",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_event_img_small.jpg')",
  },
  {
    title: "EVENT 4",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_event_img_small.jpg')",
  },
  {
    title: "EVENT 5",
    type: "quest",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_event_img_small.jpg')",
  },
];

const containerListArticles = document.querySelector(".containerListArticles");

// Filling with the page with article with the function createCard

function createCard(title, sum, imgUrl) {
  const cardArticle = document.createElement("div");
  cardArticle.classList.add("cardArticle");
  containerListArticles.appendChild(cardArticle);

  const divCardImage = document.createElement("div");
  divCardImage.classList.add("divCardImage");
  divCardImage.style.backgroundImage = imgUrl;
  cardArticle.appendChild(divCardImage);

  const divCardText = document.createElement("div");
  const divCardTitle = document.createElement("h4");
  const divCardSum = document.createElement("p");
  divCardText.classList.add("divCardText");
  divCardTitle.classList.add("divCardTitle");
  divCardSum.classList.add("divCardTitle");
  divCardTitle.innerHTML = title;
  divCardSum.innerHTML = sum;
  divCardText.appendChild(divCardTitle);
  divCardText.appendChild(divCardSum);
  cardArticle.appendChild(divCardText);
}

for (i = 0; i < arrayNewsArticlesObject.length; i++) {
  createCard(
    arrayNewsArticlesObject[i].title,
    arrayNewsArticlesObject[i].resume,
    arrayNewsArticlesObject[i].img
  );
}
