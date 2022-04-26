import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
  <header>
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
    <a routerLink="/hobbies">Hobbies</a>
    <div class="dropdown">
      <button class="dropbtn">Projects</button>
      <div class="dropdown-content">
        <a routerLink="/software-projects">Software</a>
        <a routerLink="/design-projects">Design</a>
      </div>
    </div>
</header>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
