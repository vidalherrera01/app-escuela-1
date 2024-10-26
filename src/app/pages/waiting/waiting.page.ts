import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonImg, IonButton, IonText, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavegationrouterComponent } from "../../components/navegationrouter/navegationrouter.component";
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.page.html',
  styleUrls: ['./waiting.page.scss'],
  standalone: true,
  imports: [IonFooter, IonText, IonButton, IonImg, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavegationrouterComponent]
})
export class WaitingPage implements OnInit {

  constructor(private router: Router, private datosService: DatosService) { }

  arr_user: any[] = [];

  ngOnInit() {
    console.log('Ruta actual:', this.router.url);

    this.arr_user = this.datosService.data
    console.log('en espera waiting')

    console.log(this.datosService.data)
  }

  ft_goToClasses() {
    this.router.navigate(['/classes'])
  }

  ft_goToProduct() {
    this.router.navigate(['/products'])

  }

}
