// Array of object to list the article from news

const arrayResourcesArticlesObject = [
  {
    title: "CSS 1",
    type: "css",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_small.png')",
    imgBig: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "CSS 2",
    type: "css",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_small.png')",
    imgBig: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "CSS 3",
    type: "css",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_small.png')",
    imgBig: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "CSS 4",
    type: "css",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_small.png')",
    imgBig: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "CSS 5",
    type: "css",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_css_img_small.png')",
    imgBig: "url('articles/article-1_css_img_big.jpg')",
  },
  {
    title: "HTML 1",
    type: "html",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_html_img_small.png')",
    imgBig: "url('articles/article-1_html_img_big.png')",
  },
  {
    title: "HTML 2",
    type: "html",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_html_img_small.png')",
    imgBig: "url('articles/article-1_html_img_big.png')",
  },
  {
    title: "HTML 3",
    type: "html",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_html_img_small.png')",
    imgBig: "url('articles/article-1_html_img_big.png')",
  },
  {
    title: "HTML 4",
    type: "html",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_html_img_small.png')",
    imgBig: "url('articles/article-1_html_img_big.png')",
  },
  {
    title: "HTML 5",
    type: "html",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_html_img_small.jpg')",
    imgBig: "url('articles/article-1_html_img_big.png')",
  },
  {
    title: "JS 1",
    type: "js",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_js_img_small.png')",
    imgBig: "url('articles/article-1_js_img_big.jpg')",
  },
  {
    title: "JS 2",
    type: "js",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_js_img_small.png')",
    imgBig: "url('articles/article-1_js_img_big.jpg')",
  },
  {
    title: "JS 3",
    type: "js",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_js_img_small.png')",
    imgBig: "url('articles/article-1_js_img_big.jpg')",
  },
  {
    title: "JS 4",
    type: "js",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_js_img_small.png')",
    imgBig: "url('articles/article-1_js_img_big.jpg')",
  },
  {
    title: "JS 5",
    type: "js",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitirepudiandae, porro iure tempora totam sed officiis ut odio dolore idin beatae perspiciatis..",
    img: "url('articles/article-1_js_img_small.png')",
    imgBig: "url('articles/article-1_js_img_big.jpg')",
  },
];

const containerListArticles = document.querySelector(".containerListArticles");

// Filling the page with article with the function createCard

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

//Loop which launch at loading

for (i = 0; i < arrayResourcesArticlesObject.length; i++) {
  createCard(
    arrayResourcesArticlesObject[i].title,
    arrayResourcesArticlesObject[i].resume,
    arrayResourcesArticlesObject[i].img
  );
}

//Part reserve for the tag selection using again the createCard function

const tagCSS = document.querySelector(".tagCSS");
const tagHTML = document.querySelector(".tagHTML");
const tagJS = document.querySelector(".tagJS");
const tagAll = document.querySelector(".tagAll");

tagCSS.onclick = function () {
  containerListArticles.innerHTML = "";
  for (i = 0; i < arrayResourcesArticlesObject.length; i++) {
    if (arrayResourcesArticlesObject[i].type == "css") {
      createCard(
        arrayResourcesArticlesObject[i].title,
        arrayResourcesArticlesObject[i].resume,
        arrayResourcesArticlesObject[i].img
      );
    }
  }
};

tagHTML.onclick = function () {
  containerListArticles.innerHTML = "";
  for (i = 0; i < arrayResourcesArticlesObject.length; i++) {
    if (arrayResourcesArticlesObject[i].type == "html") {
      createCard(
        arrayResourcesArticlesObject[i].title,
        arrayResourcesArticlesObject[i].resume,
        arrayResourcesArticlesObject[i].img
      );
    }
  }
};

tagJS.onclick = function () {
  containerListArticles.innerHTML = "";
  for (i = 0; i < arrayResourcesArticlesObject.length; i++) {
    if (arrayResourcesArticlesObject[i].type == "js") {
      createCard(
        arrayResourcesArticlesObject[i].title,
        arrayResourcesArticlesObject[i].resume,
        arrayResourcesArticlesObject[i].img
      );
    }
  }
};

tagAll.onclick = function () {
  containerListArticles.innerHTML = "";
  for (i = 0; i < arrayResourcesArticlesObject.length; i++) {
    createCard(
      arrayResourcesArticlesObject[i].title,
      arrayResourcesArticlesObject[i].resume,
      arrayResourcesArticlesObject[i].img
    );
  }
};

//Part of code which display the random article tilde on the top

const randomArticleTop = document.querySelector(".randomTop");
const randomArticleIndex = Math.floor(
  Math.random() * arrayResourcesArticlesObject.length
);
const titleTopRandom = document.createElement("h3");
const sumTopRandom = document.createElement("p");

titleTopRandom.innerHTML =
  arrayResourcesArticlesObject[randomArticleIndex].title;
sumTopRandom.innerHTML =
  arrayResourcesArticlesObject[randomArticleIndex].resume;
randomArticleTop.style.backgroundImage =
  arrayResourcesArticlesObject[randomArticleIndex].imgBig;
titleTopRandom.classList.add("titleTopRandom");
sumTopRandom.classList.add("sumTopRandom");
randomArticleTop.appendChild(titleTopRandom);
randomArticleTop.appendChild(sumTopRandom);
