import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray=[{taskname:'wake up', isCompleted:false}];

  onSubmit(form:NgForm){
    console.log(form);
    
    this.taskArray.push({
      taskname: form.controls['task'].value,
      isCompleted:false
    })
    form.reset();


  }
  Ondelete(index:number){
    console.log(index);

    this.taskArray.splice(index,1);
  }
  oncheck(index:number){
    console.log(this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted);
  }

}
