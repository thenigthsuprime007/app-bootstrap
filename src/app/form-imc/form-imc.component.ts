import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-imc.component.html',
  styleUrl: './form-imc.component.css'
})
export class FormImcComponent {
  resultado = "Esperando que se ingresen los datos..."
  mostrarMensaje = false
  formImc ={
    talla: null,
    peso: null
  }
  pacientesList: Paciente =[]
  calcularImc(){
    let tallam =Number(this.formImc.talla) /100
    let valorImc = Number(this.formImc.peso)/(tallam * tallam)
    var diagnostico=""
    if(valorImc <=18.5){
      diagnostico = "bajo de peso"
    }else if(valorImc<=24.9){
      diagnostico="peso normal"
    }else if(valorImc<=29.9){
      diagnostico="sobrepeso "
    }else if(valorImc<=34.9){
      diagnostico="obesidad"
    }else{
      diagnostico= "obesidad extrema"
    }
    this.resultado = "Su IMC es: " + valorImc.toFixed(2).toString()+","+diagnostico;
    this.pacientesList.push({      
      id: this.pacientesList.length +1,
      valor: valorImc.toFixed(2).toString(),
      diagnostico: diagnostico 
    })
    this.mostrarMensaje =true; 
  }
}
type Paciente = Array<{id: number, valor: string, diagnostico:string}>
