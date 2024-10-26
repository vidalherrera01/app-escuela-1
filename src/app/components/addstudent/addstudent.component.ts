import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss'],
  standalone: true,
  imports: [IonButton, CommonModule]
})
export class AddstudentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  ft_goToAddStudent() {
    this.router.navigate(['/enroll']);
  }

}
