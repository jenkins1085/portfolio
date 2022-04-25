import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-end">
        <div class="navbar-start">
          <a class="navbar-item"> Home </a>
          <a class="navbar-item"> About </a>
          <a class="navbar-item"> Hobbies </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Projects </a>
            <div class="navbar-dropdown">
              <a class="navbar-item"> Software </a>
              <a class="navbar-item"> Design </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
