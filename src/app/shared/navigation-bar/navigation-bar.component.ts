import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  isSmallWidth = false;
  logoPath = "";
  fullSizeLogoPath = "./../../assets/images/ic-fullLogo.svg";
  miniSizeLogoPath = "./../../assets/images/ic-miniLogo.svg";
  
  ngOnInit() {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if ( window.innerWidth <= 992 ) this.isSmallWidth = true;
    else this.isSmallWidth = false;
    
    if ( window.innerWidth <= 414 ) this.logoPath = this.miniSizeLogoPath;
    else this.logoPath = this.fullSizeLogoPath;
  }
}
