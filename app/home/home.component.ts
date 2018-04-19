import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  userName = "山田";

  constructor(
    private router: Router
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onTap() {
    alert("hello, " + this.userName);
  }

  onTapToNext() {
    this.router.navigate(["/list"]);
  }
}
