import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  slides = [{'image': 'assets/img/slider1.jpg'}, {'image': 'assets/img/slider2.jpg'},{'image': 'assets/img/slider3.jpg'}, {'image': 'assets/img/slider4.jpg'}];


  constructor() { }

  ngOnInit(): void {
  }

}
