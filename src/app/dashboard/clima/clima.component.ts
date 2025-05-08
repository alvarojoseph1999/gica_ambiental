import { Component } from '@angular/core';

@Component({
  selector: 'app-clima',
  imports: [],
  templateUrl: './clima.component.html',
  // styleUrl: './clima.component.css',
  styleUrls: ['./clima.component.css'], // ✅ aquí estaba el error
})
export default class ClimaComponent {}
