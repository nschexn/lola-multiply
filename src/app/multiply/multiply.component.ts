import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent  {
  public expression = {
    factor1: null,
    factor2: null,
    answer: null
  };

  answerValue: number = this.expression.answer;

  constructor() { }

  ngAfterContentInit(){
    this.assign();
  }

  // Generate Multiplication Problem
  public gmp = (): {} => {
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

  public assign = () => {
    let problem = this.gmp();
    this.expression.factor1 = problem.factor1;
    this.expression.factor2 = problem.factor2;
    this.expression.answer = problem.answer;
  }

  public checkAnswer = () => {
    console.log('answerValue', this.answerValue);
    console.log('expressionAnswer', this.expression.answer);
    if(this.answerValue == this.expression.answer){
      console.log(true);
      this.assign();
      this.answerValue = null;
    } else {
      console.log(false)
    }
  }

}