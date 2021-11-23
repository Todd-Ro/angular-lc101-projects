import { Component, OnInit } from '@angular/core';

let yestTasks: string[] = ['Empty dishwasher', 'Start LaunchCode prep work', 'Buy groceries'];
let yesterdChoreObj = {title: "Yesterday's Chores", tasks: yestTasks};
let todayTasks: string[] = ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot'];
let todayChoreObj = {title: "Today's Chores", tasks: todayTasks};
let tomorrowTasks: string[] = ['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries AGAIN'];
let tomorChoreObj = {title: "Tomorrow's Chores", tasks: tomorrowTasks};

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})


export class ChoresComponent implements OnInit {
   chores: object[] = [
      yesterdChoreObj, todayChoreObj, tomorChoreObj
   ];
   todoTitles = ["Yesterday's Chores", "Today's Chores", 
         "Tomorrow's Chores", "Next Week's Daily Chores"];

   constructor() { }

   ngOnInit() {
   }

}
