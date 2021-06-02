import { flashcard } from "./interface/Flashcard.js";
import { card } from "./classes/Card.js";
import { listTemplate } from "./classes/ListTemplate.js";
import domManip from "./dom.js";

domManip();
const question = document.querySelector("#question") as HTMLTextAreaElement;
const answer = document.querySelector("#answer") as HTMLTextAreaElement;

const form = document.querySelector("form")!;

const ul = document.querySelector("ul")!;
const list = new listTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    
    let newCard: flashcard;
    newCard = new card(question.value, answer.value); 

    list.render(newCard);

    question.value = "";
    answer.value = "";
});







