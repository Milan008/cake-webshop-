import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactComponent } from "./contact/contact.component";
import { FqaComponent } from "./fqa/fqa.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

export const IndexRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "aboutus",
        component: AboutusComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "fqa",
        component: FqaComponent
      },
      {
        path: "gallery",
        component: GalleryComponent
      },
      {
        path: "testimonials",
        component: TestimonialsComponent
      }
    ]
  }
];
