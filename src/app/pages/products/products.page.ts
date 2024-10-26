import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonImg, IonButton, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';
import { NavegationrouterComponent } from "../../components/navegationrouter/navegationrouter.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonItem, IonButton, IonImg, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavegationrouterComponent]
})
export class ProductsPage implements OnInit {

  constructor(private router: Router, private datosService: DatosService) { }

  arr_product: any[] = [];
  arr_disabled: number[] = [];
  arr_user: any[] = [];
  arr_compras: any[] = [];


  ngOnInit() {
    console.log('Ruta actual:', this.router.url);

    this.arr_user = this.datosService.data
    this.arr_compras = this.arr_user[0].compras

    fetch('http://localhost:3000/compras')
      .then(response => response.json())
      .then(data => {
        this.arr_product = data

        console.log(this.arr_product)

      })
      .catch(error => console.error('Error:', error));
  }


  ft_addProduct(index: number) {
    this.arr_compras.push({
      precio: this.arr_product[index].precio,
      nombre: this.arr_product[index].nombre
    })

    this.arr_compras.forEach((item: any, index: number) => {
      console.log(item, index)
    });

    let id = this.arr_user[0].id

    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        compras: this.arr_compras
      })

    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    this.router.navigate(['/record']);
  }


}
