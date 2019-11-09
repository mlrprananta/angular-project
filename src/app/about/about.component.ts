import { Component, OnInit } from '@angular/core';
import { Skill } from '@app/skill'
import { SKILLS } from '@app/skills'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profile: string = 'assets/profile.png';
  skills: Skill[];

  constructor() { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.skills = SKILLS;
  }
}
