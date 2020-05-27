import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from 'src/app/components/components.module';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ComponentsModule,
    LottieModule.forRoot({ player: playerFactory }),
    AngularFileUploaderModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    IconsComponent,
    NotificationsComponent,
    MapComponent,
  ]
})
export class AdminLayoutModule { }
