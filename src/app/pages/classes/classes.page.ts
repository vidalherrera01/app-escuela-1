import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonSelect, IonSelectOption, IonToolbar, IonLabel, IonButton, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonFooter, IonItem, IonTabBar, IonTab, IonIcon, IonTabButton, IonTabs, IonText, IonAlert } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavegationrouterComponent } from "../../components/navegationrouter/navegationrouter.component";
import { DatosService } from 'src/app/servicios/datos.service';
import { AddstudentComponent } from "../../components/addstudent/addstudent.component";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
  standalone: true,
  imports: [IonAlert, IonText, IonTabs, IonTabButton, IonSelect, IonSelectOption, IonIcon, IonTab, IonTabBar, IonItem, IonFooter, IonCol, IonRow, IonGrid, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavegationrouterComponent, AddstudentComponent]
})
export class ClassesPage implements OnInit {

  constructor(private router: Router, private datosService: DatosService) { }

  arr_classes: any[] = []
  arr_dependiente: any[] = []
  arr_user: any[] = []
  sl_student_name: string = ""
  xarr_class: any = []
  arr_disabled: any = []

  ngOnInit() {
    console.log('Ruta actual:', this.router.url);

    this.arr_user = this.datosService.data
    this.arr_dependiente = this.arr_user[0].dep

    fetch('http://localhost:3000/classes')
      .then(response => response.json())
      .then(data => {
        this.arr_classes = data
        this.ft_loadStudent()
      })
      .catch(error => console.error('Error:', error));
  }

  ft_arr_disabled() {
    this.xarr_class.forEach((item: any, index: number) => {
      this.arr_disabled.push(item.iter)
    });
    console.log(this.arr_disabled)
  }

  ft_loadStudent() {
    if (this.sl_student_name == "") {
      this.sl_student_name = this.arr_dependiente[0].nombre
    }

    for (const [index, item] of Object.entries(this.arr_dependiente)) {
      if (item.nombre == this.sl_student_name) {
        this.xarr_class = item.cls;
      }
    }

    this.arr_disabled = []
    this.ft_arr_disabled()
  }

  ft_addClasses(index: number) {

    for (const [iter, item] of Object.entries(this.arr_dependiente)) {
      if (item.nombre == this.sl_student_name) {
        item.cls.push({
          nombre: this.arr_classes[index].nombre,
          hours: this.arr_classes[index].hours,
          ins: this.arr_classes[index].ins,
          men: this.arr_classes[index].men,
          iter: index
        })
      }
    }

    let id = this.arr_user[0].id

    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dep: this.arr_dependiente
      })

    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.ft_arr_disabled()
      })
      .catch(error => {
        console.error('Error:', error);
      });

    this.router.navigate(['/waiting']);
  }

}
