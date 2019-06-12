import { Component, OnInit } from "@angular/core";
import { UserService } from "./shared/services/user.service";
import { fadeAnimation } from "./shared/animations/fadeIntRoute";
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  viewProviders: [Title],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {

newTitle="new title";

  constructor(private userService: UserService, private titleService: Title) {
     }





  ngOnInit() {
    this.setTitle('Amazing Cakes');
    $(document).ready(function() {
      $(".banner").owlCarousel({
        autoHeight: true,
        center: true,
        nav: true,
        items: 1,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
}


  setGeoLocation(position: any) {
    this.userService.setLocation(
      position["coords"].latitude,
      position["coords"].longitude
    );
  }
}
