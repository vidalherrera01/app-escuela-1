import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonItem, IonLabel, IonInput, IonButton, IonImg, IonIcon, IonCol, IonRow, IonGrid, IonFooter, IonAlert } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavegationrouterComponent } from "../../components/navegationrouter/navegationrouter.component";
import { DatosService } from 'src/app/servicios/datos.service';
import { AddstudentComponent } from "../../components/addstudent/addstudent.component";

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
  standalone: true,
  imports: [IonAlert, IonFooter, IonGrid, IonRow, IonCol, IonIcon, IonImg, IonButton, IonInput, IonLabel, IonItem, IonSelect, IonSelectOption, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavegationrouterComponent, AddstudentComponent]
})
export class RecordPage implements OnInit {

  constructor(private router: Router, private datosService: DatosService) { }

  ngOnInit() {
    console.log('Ruta actual:', this.router.url);

    this.arr_user = this.datosService.data
    this.arr_dependiente = this.arr_user[0].dep
    this.arr_compras = this.arr_user[0].compras


  }

  arr_user: any[] = []
  arr_dependiente: any[] = []
  sl_student_name: string = ""
  arr_compras: any[] = []

  ft_goToSchedule() {
    this.router.navigate(['/schedule']);
  }

}
