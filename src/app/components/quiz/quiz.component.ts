import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Quiz } from "src/app/models/Quiz";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"],
})
export class QuizComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  favoriteSeason: string;
  selectedOption: any;
  quiz: Quiz = this.GetQuiz();

  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {}
  GetQuiz(): Quiz {
    var quizData = localStorage.getItem("quiz1") || "{}";
    var quiz: Quiz = JSON.parse(quizData);
    return quiz;
  }
  SelectedOption(question, selectedOption) {
    this.quiz.questions.find((x) => x.id == question.id).userAnswer =
      selectedOption.id;
    this.selectedOption=null
    console.log(this.quiz)
    localStorage.setItem("quiz1", JSON.stringify(this.quiz));
  }
}
