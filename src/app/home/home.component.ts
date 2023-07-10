import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent {
  title = 'ng-carousel-demo';

  images = [
    {
      title: 'Coding',
      subtitle: 'I love coding! Hopefully, looking forward to code more <3',
      src: 'assets/slide1.png',
    },
    {
      title: 'ORM',
      subtitle: 'The backend thing, that fascinates me so much!',
      src: 'assets/slide2.png',
    },
    {
      title: 'Angular',
      subtitle: "Hey, this page is on Angular! I'm currently learning Angular!",
      src: 'assets/slide3.png',
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
