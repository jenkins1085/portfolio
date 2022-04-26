import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
  <h1>This is the HOME PAGE</h1>
  <p>It will contain a brief overview of myself.</p>
  <ul>
    <li>Software Developer at Huntington Bank</li>
    <li>Ohio State Graduate - Computer Science</li>
    <li>Enjoy drums, graphic design, and sim racing</li>
  </ul>
  <img src="/assets/images/glenn/grad-cap.jpg" alt="Glenn Grad" width=50% height=50%>
  <img src="/assets/images/glenn/grad-pfp.jpg" alt="Glenn PFP" width=50% height=50%>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
