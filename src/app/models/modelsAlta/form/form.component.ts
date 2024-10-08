import { Component } from '@angular/core';
import { TituleComponent } from '../../../components/titule/titule.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlimentosService } from '../../../services/alimentos.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [TituleComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    alta:FormGroup;

    constructor(private platillos:AlimentosService){
        this.alta = new FormGroup({
            nombre: new FormControl('',Validators.required),
            condimentos: new FormControl('',Validators.required),
            precio: new FormControl('',Validators.required)
        })
    }

    subirDesayuno(){
      if(this.alta.valid){
        this.platillos.addBreakfasts(this.alta.value.nombre, this.alta.value.condimentos, this.alta.value.precio)
        Swal.fire("Desayuno subido")
      }else{
        Swal.fire("datos incompletos")
      }
    }

    subirCena(){
      if(this.alta.valid){
        this.platillos.addDinners(this.alta.value.nombre, this.alta.value.condimentos, this.alta.value.precio)
        Swal.fire("Cena subido")
      }else{
        Swal.fire("datos incompletos")
      }
    }

}
