import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/models/Question";
import { Quiz } from "src/app/models/Quiz";

@Component({
  selector: "app-create-quiz",
  templateUrl: "./create-quiz.component.html",
  styleUrls: ["./create-quiz.component.scss"],
})

export class CreateQuizComponent implements OnInit {
 
  constructor() {}
  quizTitle: string = "";
  quizDescription: string = "";
  QuestionsList: Question[] = [];

  ngOnInit(): void {}

  AddQuestion() {
    var newQuestion: Question = {
      id: this.QuestionsList.length + 1,
      text: "",
      answers: [],
    };
    this.QuestionsList.push(newQuestion);
  }

  AddAnswer(question: Question) {
    question.answers.push({
      id: question.answers.length + 1,
      text: "",
      isCorrect: false,
    });
  }

  CreateQuiz() {
    var newQuiz: Quiz = {
      id: 1,
      name: this.quizTitle,
      description: this.quizDescription,
      questions: this.QuestionsList,
    };
    console.log(newQuiz);
    localStorage.setItem("quiz" + newQuiz.id, JSON.stringify(newQuiz));
  }

}
