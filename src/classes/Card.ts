import { flashcard } from "../interface/Flashcard.js";

export class card implements flashcard {
    constructor(private question: string, private answer: string){}
    front(){
        return this.question;
    }
    back(){
        return this.answer;
    }
}