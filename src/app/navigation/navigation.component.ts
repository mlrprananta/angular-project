import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  isOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("Started")
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.debug('Ok')
  }

  onClick() {
    this.isOpen = !this.isOpen;

  }
}
