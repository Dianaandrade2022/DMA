import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso2',
  templateUrl: './curso2.page.html',
  styleUrls: ['./curso2.page.scss'],
})
export class Curso2Page implements OnInit {

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
