import { Component, AfterContentInit } from '@angular/core';

interface Expression {
  factor1: number,
  factor2: number,
  answer: number
}

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent  {
  expression: Expression = {
    factor1: null,
    factor2: null,
    answer: null
  };

  answerValue: number = this.expression.answer;
  correctAnswers: number = 0;
  emojis: string[] = ['🍕','🐶'];
  prizes: string[] = [];
  feedback: string = `Let's get started!`;

  constructor() { }

  ngAfterContentInit(){
    this.assign(this.gmp());
  }

  // Generate Multiplication Problem
  public gmp = (): Expression => {
    let factor1: number = Math.floor(Math.random() * 11);
    let factor2: number = Math.floor(Math.random() * 11);
    let answer:number = factor1 * factor2;
    console.log(
      {
      factor1: factor1,
      factor2: factor2,
      answer: answer,
    }
    );
    return {
      factor1: factor1,
      factor2: factor2,
      answer: answer,
    } 
  }

  public assign = (problem) => {
    this.expression.factor1 = problem.factor1;
    this.expression.factor2 = problem.factor2;
    this.expression.answer = problem.answer;
  }

  public checkAnswer = () => {
    console.log('answerValue', this.answerValue);
    console.log('expressionAnswer', this.expression.answer);
    if(this.answerValue == this.expression.answer){
      console.log(true);
      this.assign(this.gmp());
      this.answerValue = null;
      this.correctAnswers++;
      this.trackPrizes(this.correctAnswers);
      this.feedback = `You got ${this.correctAnswers} correct answers in a row!`;
    } else {
      console.log(false)
      this.correctAnswers = 0;
      this.feedback = `Oh no! You answered incorrectly. It's okay, try again. 👨 still 	❤️'s you!`; 
    }
  }

  public trackPrizes(correctAnswers){
    switch(correctAnswers) {
      case 1:
        this.prizes.push(this.emojis[0]);  
        console.log(this.prizes);
      break;
      case 2:
        this.prizes.push(this.emojis[1]);  
        console.log(this.prizes);
      break;
      default:
        // code block
    }
  }

}