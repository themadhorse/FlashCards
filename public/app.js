import { card } from "./classes/Card.js";
import { listTemplate } from "./classes/ListTemplate.js";
import domManip from "./dom.js";
domManip();
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const list = new listTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newCard;
    newCard = new card(question.value, answer.value);
    list.render(newCard);
    question.value = "";
    answer.value = "";
});
