import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cursos: any[]=[
    {id:'../../assets/cursos/6.jpg',name:'Administrador de servidor paso a paso',tab:'curso1',profesor:''},
    {id:'../../assets/cursos/7.jpg',name:'Implementaciones de Servidores',tab:'curso2',profesor:''},
    {id:'../../assets/cursos/8.jpeg',name:'Administrar Windows Server',tab:'curso3',profesor:''},
    {id:'../../assets/cursos/9.jpg',name:'Fundamentos de lenguaje RPG',tab:'curso4',profesor:''},
    {id:'../../assets/cursos/10.jpeg',name:'Hestia Panel',tab:'curso11',profesor:''},
    {id:'../../assets/cursos/11.jpg',name:'Laravel a production',tab:'curso12',profesor:''},
    {id:'../../assets/cursos/1.jpeg',name:'Optimización de servidores Web',tab:'curso13',profesor:''},
    {id:'../../assets/cursos/5.jpeg',name:'Zentyal',tab:'curso14',profesor:''},
    {id:'../../assets/cursos/3',name:'',tab:'Python',profesor:''},
    {id:'../../assets/cursos/1.jpeg',name:'Zabbix - De Principiante a ExpertoAproveche las características avanzadas de Zabbix para configurar un sistema de monitoreo de red profesionalCalificación: 4,3 de 5776 reseñas16,5 horas en total90 clasesTodos los nivelesPrecio actual: 429 MX$',tab:'curso1',profesor:'Fidel Dominguez Valero'},
    {id:'../../assets/cursos/2.jpeg',name:'VPS Seguro en Ubuntu 20.04 con Letsencrypt, Cloudflare y más',tab:'curso2',profesor:''},
    {id:'../../assets/cursos/3.jpeg',name:'Introducción al AS/400(IBMi) Paso a PasoConociendo el entorno y los primeros comandos básicosCalificación: 4,4 de 5120 reseñas2 horas en total10 clasesPrincipiantePrecio actual: 379 MX$',tab:'curso3',profesor:''},
    {id:'../../assets/cursos/4.jpeg',name:'Fundamentos del lenguaje RPG Full Free y SDA',tab:'curso4',profesor:''},
    {id:'../../assets/cursos/5.jpeg',name:'Administrador de sistemas Junior',tab:'curso5',profesor:''},
    {id:'../../assets/cursos/6.jpeg',name:'Administración práctica de apache Web Server',tab:'curso6',profesor:''},

  ]

}
