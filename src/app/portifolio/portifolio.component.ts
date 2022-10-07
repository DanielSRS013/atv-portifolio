import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  nome = 'Daniel Souza da Rocha Silva';
  objetivo = 'Vaga de Desenvolvedor Frontend';
  conhecimentos = 'JavaScript, PHP, HTML, CSS e React';
  cursoUm = 'Técnico em Informática - SENAC';
  cursoDois = 'JavaScript - Udemy';
  cursoTres = 'React - Udemy';
  experiencia = 'Desenvolvimento de sites e sistemas nos cursos que estou cursando.';
  constructor() { }

  ngOnInit(): void {
  }

}
