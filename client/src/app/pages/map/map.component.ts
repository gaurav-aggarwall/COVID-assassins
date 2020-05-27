import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from 'ngx-lottie';
import { ToastrService } from 'ngx-toastr';

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
  staticAlertClosed = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed3 = false;
  staticAlertClosed4 = false;
  staticAlertClosed5 = false;
  staticAlertClosed6 = false;
  staticAlertClosed7 = false;

  constructor(private toastr: ToastrService) { }

  showNotification(from, align) {

    const color = Math.floor((Math.random() * 5) + 1);

    switch (color) {
      case 1:
        this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Not a <b>Real</b> Answer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;s
      case 2:
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Not a <b>Real</b> Answer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 3:
        this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Not a <b>Real</b> Answer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-warning alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 4:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Not a <b>Real</b> Answer.', '', {
          disableTimeOut: true,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 5:
        this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Not a <b>Real</b> Answer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }

  ngOnInit() {
  }
}
