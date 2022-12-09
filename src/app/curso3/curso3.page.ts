import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso3',
  templateUrl: './curso3.page.html',
  styleUrls: ['./curso3.page.scss'],
})
export class Curso3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cursos:any[]=[
    {id:'',
    name:'',
    puntaje:0,
    url:'',
    tema1:'',
    tema2:'',
    tema3:'',
    tema4:'',
    tema5:'',
    tema6:'',
  }
  ]
}
