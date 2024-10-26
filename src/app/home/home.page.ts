import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonIcon, IonText, IonFooter, IonModal, IonAlert } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { DatosService } from '../servicios/datos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonAlert, IonModal, RouterModule, CommonModule, IonFooter, IonText, FormsModule, IonIcon, IonButtons, IonButton, IonInput, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(
    private router: Router,
    private datosService: DatosService
  ) { }

  inp_correo: string = "enyer";
  inp_pass: string = "2024";
  arr_user: any[] = [];
  bl_interructor: boolean = true;
  bl_alert: boolean = true;
  opcionNumberResp: number = -1;

  isAlertOpen: boolean = false;
  alertButtons = ['Action'];

  isAlertOpenSignup: boolean = false;
  alertButtonsSignup = ['Action'];

  isAlertOpenIncorrect: boolean = false;
  alertButtonsIncorrect = ['Action'];

  setOpen2(isOpen: boolean) {
    this.isAlertOpenSignup = isOpen;
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setOpen3(isOpen: boolean) {
    this.isAlertOpenIncorrect = isOpen;
  }

  ft_login() {

    if (this.inp_pass == "" || this.inp_correo == "") {
      this.setOpen(true)
      return
    }

    fetch(`http://localhost:3000/users/?correo=${this.inp_correo}&pass=${this.inp_pass}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.length == 1) {
          this.arr_user = data
          this.datosService.data = this.arr_user
        } else {
          this.setOpen3(true)
          console.log('incorrecto clave')
          return
        }

        if (data[0].dep != 0) {
          this.router.navigate(['/classes']);
        } else {
          this.router.navigate(['/inscribite']);
        }

      })
      .catch(error => console.error('Error:', error));
  }

  ft_interructor() {
    this.bl_interructor = !this.bl_interructor
  }

  ft_signup() {
    if (this.inp_pass == "" || this.inp_correo == "") {
      this.setOpen(true)
      return
    }

    fetch(`http://localhost:3000/users/?correo=${this.inp_correo}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.length)
        if (data.length == 1) {
          this.setOpen2(true)
        }

        if (data.length == 0) {
          fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              correo: this.inp_correo,
              pass: this.inp_pass,
              dep: []
            })
          })
            .then(response => response.json())
            .then(data => {
              this.ft_login()
            })
            .catch(error => {
              console.error('Error:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  ngOnInit() {
    this.ft_login()
  }
}
