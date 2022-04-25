import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <ul>
    <li>
        <a href="#">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          <span> - LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-github" aria-hidden="true"></i>
          <span> - Github</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-youtube" aria-hidden="true"></i>
          <span> - Youtube</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <span> - Facebook</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <span> - Instagram</span>
        </a>
      </li>
    </ul>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
