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
  emojis: string[] = ['🍕','🐶','🏆','🏀','🎮','🎨'];
  prizes: string[] = [];
  feedback: string = `Let's get started!`;
  wrongAnswerFeedback: string[] = [
    `Oh no! You answered incorrectly. It's okay, try again. Daddy 👨 still 	❤️'s you!`,
    `Did you get it wrong because Rosebud distracted you? 🐕‍🦺 🐾`,
    `🦊 Swipper no swippy! 🦊`,
    `💩`,
    `Don't be so 😔`,
    `Keep trying. Maybe one day you will be as smart as daddy! 👨`,
    `Try again, but this 🕰️ answer correctly!`,
    `Your multiplication knowledge is still under construction 🚧`,
    `🎅 said no 🎁's for you under the 🎄 until you learn how to multiply!`,
    `Wrong! 🙅`,
    `Nope 👎`,
    `Umm, you got the answer right...🤥`,
    `You can't be a 🤓 if you don't know your multiplication table`,
    `You are not a 🤖`,
    `Hold up! Let me 👀 for the correct answer`,
    `💣`,
    `Looking for the correct answer 🔦`,
    
  ];
  min: number = 2;
  max: number = 12;
  constructor() { }

  ngAfterContentInit(){
    this.assign(this.gmp(this.min,this.max));
  }

  // Generate Multiplication Problem
  public gmp = (min, max): Expression => {
    let factor1: number = Math.floor(Math.random() * (max - min)) + min;
    let factor2: number = Math.ceil(Math.random() * (max - min)) + min;
    let answer:number = factor1 * factor2;
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
    if(this.answerValue == this.expression.answer){
      this.assign(this.gmp(this.min, this.max));
      this.answerValue = null;
      this.correctAnswers++;
      this.trackPrizes(this.correctAnswers);
      this.feedback = this.correctAnswers === 1 ? `Great start! Keep Going!`: `You got ${this.correctAnswers} correct answers in a row!`;
    } else {
      this.correctAnswers = 0;
      this.feedback = this.wrongAnswerFeedback[Math.floor(Math.random() * this.wrongAnswerFeedback.length)]; 
    }
  }

  public trackPrizes(correctAnswers){
    switch(correctAnswers) {
      case 5:
        this.prizes = [...this.emojis[0]];
      break;
      case 10:
        this.prizes = [...this.prizes ,...this.emojis[1]];
      break;
      case 15:
        this.prizes = [...this.prizes ,...this.emojis[2]];
      break;
      case 20:
        this.prizes = [...this.prizes ,...this.emojis[3]];
      break;
      case 25:
        this.prizes = [...this.prizes ,...this.emojis[4]];
      break;
      case 30:
        this.prizes = [...this.prizes ,...this.emojis[5]];
      break;
      default:
        // code block
    }
  }

}