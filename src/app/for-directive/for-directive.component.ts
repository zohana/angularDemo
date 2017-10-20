import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent  {
  isHidden: boolean = true;

  courses=[
    { id: '1', name:'course1'},
    { id: '2', name:'course2'},
    { id: '3', name:'course3'},       
  ];

  moreCourses;

  loadCourses(){
    this.moreCourses=[
      { id: '4', name:'course4'},
      { id: '5', name:'course5'},
      { id: '6', name:'course6'},       
    ];
  }
  
  trackByCourse(index, moreCourses){
    return moreCourses ? moreCourses.id: undefined;
  }

  removeCourse(index){
    console.log('removed'); 
    let variableToRemove = this.courses.indexOf(index,1);
    this.courses.splice(variableToRemove);
  }

  addCourse(){
    this.courses.push({id:'4', name:'course4'});
  }

  onTruncate(){
    this.isHidden = !this.isHidden;
    
  }

  trackByCourseExpand(index, courses){
    return courses ? courses.id: undefined;
  }

}
