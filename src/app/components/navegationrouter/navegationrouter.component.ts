import { Component, OnInit } from '@angular/core';
import { IonButton, IonGrid, IonRow, IonCol, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navegationrouter',
  templateUrl: './navegationrouter.component.html',
  styleUrls: ['./navegationrouter.component.scss'],
  standalone: true,
  imports: [IonFooter, IonCol, IonRow, IonGrid, IonButton, CommonModule]
})
export class NavegationrouterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  ft_goToClasses() {
    this.router.navigate(['/classes']);
  }

  ft_goToSchedule() {
    this.router.navigate(['/schedule']);
  }

  ft_goToRecord() {
    this.router.navigate(['/record']);
  }

  ft_goToProduct() {
    this.router.navigate(['/products']);
  }

}
