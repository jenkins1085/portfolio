import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-projects',
  template: `
    <h1>This is the SOFTWARE PROJECTS PAGE</h1>
    <p>Projects I still have from school, personal projects, and future plans</p>
    <p>Links to Github repos</p>
  `,
  styles: [
  ]
})
export class SoftwareProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
