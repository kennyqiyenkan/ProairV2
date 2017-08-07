import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedProjectImgSrc = "./../../../assets/images/img-home-banner.png";
  selectedProjectImgIndex = 0;
  projectImg0 = "./../../../assets/images/img-home-banner.png";
  projectImg1 = "./../../../assets/images/img-home-banner.png";
  projectImg2 = "./../../../assets/images/img-home-banner.png";

  constructor() { }

  ngOnInit() {
  }

  selectProject(index) {
    switch (index) {
      case 0 :
        this.selectedProjectImgSrc = this.projectImg0;
        this.selectedProjectImgIndex = 0;
        break;
      case 1 :
        this.selectedProjectImgSrc = this.projectImg1;
        this.selectedProjectImgIndex = 1;
        break;
      case 2 :
        this.selectedProjectImgSrc = this.projectImg2;
        this.selectedProjectImgIndex = 2;
        break;
      default:
        console.log("[HomeComponent]: index not recognized");
    }
  }
}
