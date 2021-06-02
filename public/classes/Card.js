export class card {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    front() {
        return this.question;
    }
    back() {
        return this.answer;
    }
}
