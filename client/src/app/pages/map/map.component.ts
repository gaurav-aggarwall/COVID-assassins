import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from 'ngx-lottie';

declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: "app-map",
  templateUrl: "map.component.html"
})
export class MapComponent implements OnInit {
  
  options: AnimationOptions = {
    path: '/assets/anims/bot.json',
  };
  constructor() { }

  ngOnInit() {
  }
}
