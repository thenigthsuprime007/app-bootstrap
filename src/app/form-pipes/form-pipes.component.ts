import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.css'
})
export class FormPipesComponent {
  
  alumnos = [
    {nombre: "Ugaz"},
    {nombre: "Gamarra"},
    {nombre: "Rojas"},
    {nombre: "Carbajo"},
    {nombre: "Polleri"},
  ]

  fechaActual = new Date()
  mostrarResultado = 0

  cursos = [
    {nombre: "Desarrollo web", profesor: "Damaso Lopez", precio: 2500},
    {nombre: "Proyecto Certificador", profesor: "Marco Villa", precio: 1500},
    {nombre: "Ingles Tecnico", profesor: "Maria Chavez", precio: 2000},
    {nombre: "Servicios Web 1", profesor: "Silfrido Alva", precio: 2000}
  ]
  mostrarAlumnos(){
    this.mostrarResultado = 1
  }
  mostrarCursos(){
    this.mostrarResultado = 0
  }

}
