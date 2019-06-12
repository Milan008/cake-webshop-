// Core Dependencies
import { RouterModule } from "@angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexRoutes } from "./index.routing";
import { ProductModule } from "../layouts/product/product.module";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";



// Components
import { IndexComponent } from "./index.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SharedModule } from "../shared/shared.module";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactComponent } from "./contact/contact.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FqaComponent } from './fqa/fqa.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';








@NgModule({
  imports: [ CommonModule,
    ProductModule,
    SharedModule,
    RouterModule.forChild(IndexRoutes),
    ReactiveFormsModule
  

 
    
     ],
	declarations: [
      IndexComponent,
      NavbarComponent,
      LoginComponent,
      FooterComponent,
      AboutusComponent,
      ContactComponent,
      FqaComponent,
      GalleryComponent,
      TestimonialsComponent
         ],
	schemas: [ NO_ERRORS_SCHEMA ],
	exports: [ NavbarComponent, FooterComponent ],
	providers: []
})
export class IndexModule {}
