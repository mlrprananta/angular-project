import { Component, OnInit } from '@angular/core';
import { faGithub, faGitlab, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faGithub : IconDefinition = faGithub;
  faGitlab : IconDefinition = faGitlab;
  faLinkedin : IconDefinition = faLinkedin;
  faAt : IconDefinition = faAt;

  constructor() { }

  ngOnInit() {
  }

}
