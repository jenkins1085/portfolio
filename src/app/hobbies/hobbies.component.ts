import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  template: `
    <h1>This is the HOBBIES PAGE</h1>
    <p>I will talk about music - marching band, drums at church</p>
    <p>Also will talk about personal projects and sim racing, with links to those specific webpages as well</p>
    <img src="/assets/images/glenn/mcdc-bw.jpg" alt="Glenn Grad" width=50% height=50%>
    <img src="/assets/images/glenn/mcdc-headshot.jpg" alt="Glenn PFP" width=50% height=50%>
    <img src="/assets/images/glenn/osu-script.jpg" alt="Glenn PFP" width=50% height=50%>
    <img src="/assets/images/glenn/osu-standing-still.jpg" alt="Glenn PFP" width=50% height=50%>
  `,
  styles: [
  ]
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
