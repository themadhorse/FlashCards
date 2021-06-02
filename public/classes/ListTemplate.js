export class listTemplate {
    constructor(list) {
        this.list = list;
    }
    render(newCard) {
        const fCard = document.createElement("div");
        const container = document.createElement("div");
        const front = document.createElement("div");
        const back = document.createElement("div");
        const del = document.createElement('button');
        fCard.classList.add("flashCard");
        del.innerHTML = `<h4>Delete</h4>`;
        del.classList.add("delFlashcard");
        del.addEventListener("click", function () {
            fCard.remove();
        });
        const question = document.createElement('h3');
        question.innerText = newCard.front();
        front.append(question);
        const answer = document.createElement('h3');
        answer.innerText = newCard.back();
        back.append(answer);
        container.append(front, back);
        container.classList.add("thecard");
        front.classList.add("front");
        back.classList.add("back");
        back.innerText = newCard.back();
        fCard.append(container);
        fCard.append(del);
        this.list.append(fCard);
    }
}
