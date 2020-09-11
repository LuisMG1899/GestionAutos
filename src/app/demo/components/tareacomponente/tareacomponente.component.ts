import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareacomponente',
  templateUrl: './tareacomponente.component.html',
  styleUrls: ['./tareacomponente.component.scss']
})
export class TareacomponenteComponent implements OnInit {
  valor: any;
img = 'assets/stickers1.png';
  constructor() { }

  ngOnInit(): void {
  }

}
