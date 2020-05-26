import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-anim-view',
  templateUrl: './anim-view.component.html',
  styleUrls: ['./anim-view.component.scss']
})
export class AnimViewComponent implements OnInit, OnChanges {

  @Input()
  public path?: string = '';

  @Input()
  public height?: Number = 300;

  @Input()
  public width?: Number = 300;

  public lottieConfig: Object;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.lottieConfig = {
      path: this.path,
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
