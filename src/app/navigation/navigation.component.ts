import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('update', [
      state('transparent', style({
        backgroundColor: 'transparent'
      })),
      state('solid', style({
        backgroundColor: 'white'
      })),
      transition('transparent <=> solid', [
        animate('0.2s')
      ]) 
    ])
  ]
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
    if (offset < 0) {
      this.isSolid = true;
    } else {
      this.isSolid = false;
    }
  }

  onClick() {
    this.isOpen = !this.isOpen;
  }

  scrollToElement(target) {

  }
}
