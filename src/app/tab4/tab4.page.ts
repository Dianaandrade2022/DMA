import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profesor: any[]=[
    {id:'../../assets/profesor/1.jpeg',name:'Administrador de servidor paso a paso',tab:'curso7',profesor:''},
    {id:'../../assets/profesor/2.jpeg',name:'Implementaciones de Servidores',tab:'curso8',profesor:''},
    {id:'../../assets/profesor/3.jpeg',name:'Administrar Windows Server',tab:'curso9',profesor:''},
    {id:'../../assets/profesor/4.jpg',name:'Fundamentos de lenguaje RPG',tab:'curso10',profesor:''},
    {id:'../../assets/profesor/5.jpg',name:'Hestia Panel',tab:'curso11',profesor:''},
    {id:'../../assets/profesor/6.jpeg',name:'Laravel a production',tab:'curso12',profesor:''},
    
  ]

}
