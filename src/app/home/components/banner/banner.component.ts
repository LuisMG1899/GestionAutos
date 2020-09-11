import { Component, OnInit,  } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit  {
  imagenes = [
    {
      image: "assets/camaro.png",
      alt : "camaro",
    },
    {
      image: "assets/versa.png",
      alt : "versa",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
 
}
