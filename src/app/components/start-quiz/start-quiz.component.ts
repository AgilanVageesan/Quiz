import { Component, OnInit } from "@angular/core";
import { Quiz } from "src/app/models/Quiz";

@Component({
  selector: "app-start-quiz",
  templateUrl: "./start-quiz.component.html",
  styleUrls: ["./start-quiz.component.scss"],
})
export class StartQuizComponent implements OnInit {
  constructor() {}

  quiz: Quiz = this.GetQuiz();
  ngOnInit(): void {}
  GetQuiz(): Quiz {
    var quizData = localStorage.getItem("quiz1") || "{}";
    var quiz: Quiz = JSON.parse(quizData);
    return quiz;
  }
}
