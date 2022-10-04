const questionAndAnswer =[
    {
        question: "What is an FAQ Page?",
        answer: "qsqsqsqwdwqeceqcevcewve qwcqwcwqc qwcqwcqwcwq    qecwecewcewc      wecwecwe. asdqwdqwdqwdwq.rtebrtebtr.",
    },

    {
        question: "Why do you need an FAQ page?",
        answer: "qsqsqsqwdwqeceqcevcewve qwcqwcwqc qwcqwcqwcwq    qecwecewcewc      wecwecwe. asdqwdqwdqwdwq.rtebrtebtr.",
    },

    {
        question: "Does it improves the user experience of a website?",
        answer: "qsqsqsqwdwqeceqcevcewve qwcqwcwqc qwcqwcqwcwq    qecwecewcewc      wecwecwe. asdqwdqwdqwdwq.rtebrtebtr.",
    },
]

const cardQuestion = document.querySelector(".faq-container");


function createCard(question, answer) {
    const card = document.createElement("div");
    card.classList.add("faq-question");
    cardQuestion.appendChild(card);

    const cardFaqBody = document.createElement("div");
    cardFaqBody.classList.add("faq-body");
    card.appendChild(cardFaqBody);



    const cardFaqPage = document.createElement("h2");
    cardFaqPage.classList.add("faq-page");
    cardFaqPage.innerHTML = question;
    card.appendChild(cardFaqPage);


    const cardFaqAnswer = document.createElement("p");
    cardFaqAnswer.classList.add("faq-answer");
    cardFaqAnswer.innerHTML = answer;
    card.appendChild(cardFaqAnswer);

    }

    for (let i = 0; i < questionAndAnswer.length; i++) {
        createCard(questionAndAnswer[i].question, questionAndAnswer[i].answer);
      }



let faq = document.getElementsByClassName("faq-page");
let i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

// let answers = document.querySelectorAll(".faq-container");
// answers.forEach((event) => {
//   event.addEventListener("click", () => {
//     if (event.classList.contains("active")) {
//       event.classList.remove("active");
//     } else {
//       event.classList.add("active");
//     }
//   });
// });