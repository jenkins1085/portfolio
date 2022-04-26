import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer>
      <ul class="social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/glennjenkins1085/" target="_blank">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/jenkins1085" target="_blank">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCzq69MftYpA9mkfkNZIRkJQ" target="_blank">
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Jenkins1085/" target="_blank">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/glennjenkns/" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
