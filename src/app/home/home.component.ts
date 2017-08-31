import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedProjectImgIndex = 0;
  projectImg = [
    "./../../../assets/images/img-KPV-Redang.jpg",
    "./../../../assets/images/img-gagah-271.jpg",
    "./../../../assets/images/img-teguh-272.jpg"
  ];
  selectedProjectImgSrc = this.projectImg[0];
  isSmallScreen = false;

  constructor() { }

  ngOnInit() {
    this.onResize(null);
  }

  selectProject(index) {
    switch (index) {
      case 0 :
        this.selectedProjectImgSrc = this.projectImg[0];
        this.selectedProjectImgIndex = 0;
        break;
      case 1 :
        this.selectedProjectImgSrc = this.projectImg[1];
        this.selectedProjectImgIndex = 1;
        break;
      case 2 :
        this.selectedProjectImgSrc = this.projectImg[2];
        this.selectedProjectImgIndex = 2;
        break;
      default:
        console.log("[HomeComponent]: index not recognized");
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if ( window.innerWidth <= 992 ) this.isSmallScreen = true;
    else this.isSmallScreen = false;
  }
}
