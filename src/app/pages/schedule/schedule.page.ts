import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonSelect, IonSelectOption, IonToolbar, IonLabel, IonItem, IonButton, IonText, IonFooter, IonFab, IonAvatar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavegationrouterComponent } from "../../components/navegationrouter/navegationrouter.component";
import { AddstudentComponent } from "../../components/addstudent/addstudent.component";
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonFab, IonFooter, IonText, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavegationrouterComponent, AddstudentComponent]
})
export class SchedulePage implements OnInit {


  constructor(private router: Router, private datosService: DatosService) { }

  ngOnInit() {
    console.log('Ruta actual:', this.router.url);

    this.arr_user = this.datosService.data
    this.arr_dependiente = this.arr_user[0].dep
  }

  arr_user: any[] = []
  arr_dependiente: any[] = []

  ft_goToClasses() {
    this.router.navigate(['/classes']);
  }

}
