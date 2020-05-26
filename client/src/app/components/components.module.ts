import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LottieAnimationViewModule } from 'ng-lottie';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AnimViewComponent } from './anim-view/anim-view.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, LottieAnimationViewModule.forRoot()],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, AnimViewComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, AnimViewComponent]
})
export class ComponentsModule { }
