import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-projects',
  template: `
    <h1>This is the DESIGN PROJECTS PAGE</h1>
    <p>Lots of photos of sim racing paint schemes made in GIMP</p>
    <p>Probably talk about youtube channel? Why not. It's something</p>
  `,
  styles: [
  ]
})
export class DesignProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
