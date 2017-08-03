import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  isSmallWidth = false;
  
  ngOnInit() {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if ( window.innerWidth <= 991 ) this.isSmallWidth = true;
    else this.isSmallWidth = false; 
    console.log(this.isSmallWidth);
  }
}
