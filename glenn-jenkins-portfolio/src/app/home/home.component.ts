import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <section class="hero is-bold is-halfheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Glenn Jenkins Portfolio Website</h1>
        </div>
      </div>
      <div class="faded">
        <figure class="image is-16by9">
          <img src="/assets/images/glenn/osu-script.jpg" alt="Script Ohio" />
        </figure>
      </div>
    </section>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
