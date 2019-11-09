import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  isOpen: boolean = false;
  isSolid: boolean = false;

  constructor(private element: ElementRef, private router: Router) { }

  ngOnInit() {
    console.log("Started")
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let offset = this.element.nativeElement.getBoundingClientRect().top;
    if (offset < -200) {
      this.isSolid = true;
    } else {
      this.isSolid = false;
    }
  }

  onClick() {
    this.isOpen = !this.isOpen;
  }
}
