export default function domManip(){
    $("#creation").hide();
    let addQuestion = document.querySelector("#addQuestion")!;
    addQuestion.addEventListener("click", () => {
        $("#creation").slideToggle();
    });

    
}
