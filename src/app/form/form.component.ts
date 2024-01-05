import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData: any = {}; // Model to store form data

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/details'], { state: { data: this.formData } });
  }
}
