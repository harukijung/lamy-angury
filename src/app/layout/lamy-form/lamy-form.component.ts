import { Component, OnInit } from '@angular/core';
import {Question} from '../models/question';
@Component({
  selector: 'app-lamy-form',
  templateUrl: './lamy-form.component.html',
  styleUrls: ['./lamy-form.component.scss']
})
export class LamyFormComponent implements OnInit {


  questionList: Question[] = questions;
  labelOption : string[];
  score:number = 0;
  constructor() { }

  ngOnInit() {
    for(let index =0; index< this.questionList.length;index++)
    {
      this.questionList[index].answered =0;
    }
    this.score= 0;
  }


  submitForm(){
    this.score = 0;
    console.log(this.questionList[0].answered);
    console.log(this.questionList[1].answered);
    for(let index =0; index< this.questionList.length;index++)
    {
      if(this.questionList[index].answered == this.questionList[index].answer)
        {
          this.score++;
        }
    }
    console.log('score =' + this.score);
  }
}



const questions: Question[] = [
  {id: 1, desc: 'What is the first color of LAMY', options:  [
    {id: 1, desc: 'Green'},
    {id: 2, desc: 'Blue'},
    {id: 3, desc: 'Milk Tea'},
    {id: 4, desc: 'Black'},
  ]
  , answered: 0, answer: 3},

  {id: 2, desc: 'What is the material of LAMY AL-star', options:  [
    {id: 1, desc: 'Plastic'},
    {id: 2, desc: 'Aluminium'},
    {id: 3, desc: 'Stainless'},
    {id: 4, desc: 'Iron'},
  ] , answered: 0, answer: 2},

  {id: 3, desc: 'Which is the color of Safari limited edition of 2009', options:  [
    {id: 1, desc: 'Orange'},
    {id: 2, desc: 'Light Blue'},
    {id: 3, desc: 'Yellow'},
    {id: 4, desc: 'Pink'},
  ] , answered: 0, answer: 1},

  {id: 4, desc: 'Which is Safari Neon', options:  [
    {id: 1, desc: 'Laser, green, coral'},
    {id: 2, desc: 'Yellow, coral, green'},
    {id: 3, desc: 'Pink, line, yellow'},
    {id: 4, desc: 'Yellow, lime, coral'},
  ] , answered: 0, answer: 4},

  {id: 5, desc: 'What is a violet LAMY', options:  [
    {id: 1, desc: 'Petrol'},
    {id: 2, desc: 'Lavender'},
    {id: 3, desc: 'Dark Lilac'},
    {id: 4, desc: 'Taro'},
  ] , answered: 0, answer: 3},
]

