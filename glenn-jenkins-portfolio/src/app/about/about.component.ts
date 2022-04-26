import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>This is the ABOUT PAGE</h1>
    <p>It will be an expansion of my resume, going into detail my professional, academic, and personal experiences</p>
    <img src="/assets/images/glenn/Glenn Jenkins Resume.png" height=50% width=50%>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
