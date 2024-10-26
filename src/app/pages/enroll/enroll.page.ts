import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelect, IonSelectOption, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonButton, IonInput, IonText, IonCard, IonCardSubtitle, IonCardContent, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavegationrouterComponent } from "../../components/navegationrouter/navegationrouter.component";
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonFooter, IonCardContent, IonCardSubtitle, IonCard, IonText, IonInput, IonButton, IonList, IonLabel, IonItem, IonCardTitle, IonSelectOption, IonSelect, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavegationrouterComponent]
})
export class EnrollPage implements OnInit, OnDestroy {

  constructor(private router: Router, private datosService: DatosService) { }

  ngOnInit() {
    console.log('Ruta actual:', this.router.url);
    this.arr_user = this.datosService.data
  }

  ngOnDestroy() {
    console.log('saliendo de enroll')
  }


  arr_compras: any[] = []
  arr_dependiente: any[] = []
  arr_user: any[] = []

  //class -----------
  inp_nombre: string = ""
  inp_edad: string = ""
  inp_enfemedad: string = ""
  inp_nombreres: string = ""
  inp_numerores: string = ""
  inp_emailres: string = ""

  ft_addStudent() {
    let id = this.arr_user[0].id

    this.arr_user[0].dep.push({
      nombre: this.inp_nombre,
      edad: this.inp_edad,
      enf: this.inp_enfemedad,
      resNum: this.inp_nombreres,
      resEmail: this.inp_numerores,
      resNombre: this.inp_emailres,
      cls: []
    })

    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dep: this.arr_user[0].dep
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        // this.arr_user = data

      })
      .catch(error => {
        console.error('Error:', error);
      });

    this.router.navigate(['/classes']);

  }
}

