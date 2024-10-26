import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonButtons, IonFooter, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { DatosService } from '../../servicios/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscribite',
  templateUrl: './inscribite.page.html',
  styleUrls: ['./inscribite.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonText, IonFooter, IonButtons, IonIcon, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InscribitePage implements OnInit {

  constructor(private datosService: DatosService, private router: Router,) { }

  ngOnInit() {
    console.log('Ruta actual:', this.router.url);

    this.arr_user = this.datosService.data

    this.arr_depetendiente = this.arr_user[0].dep

    if (this.arr_depetendiente.length != 0) {
      this.router.navigate(['/classes']);
    } else {
      console.log("dependientes vacia")
    }
  }

  arr_depetendiente: any[] = []
  arr_user: any[] = []

  ft_form() {
    this.router.navigate(['/enroll']);
  }
}