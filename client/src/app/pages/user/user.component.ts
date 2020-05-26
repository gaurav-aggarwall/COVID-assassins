import { Component, OnInit } from "@angular/core";
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  
  options: AnimationOptions = {
    path: '/assets/anims/detection.json',
  };
  
  constructor() {
  }
  ngOnInit() { }
}
