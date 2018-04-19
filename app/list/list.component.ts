import { Component, OnInit } from "@angular/core";
import { Animal } from "../animal";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {

  animals: Animal[] = [];

  constructor() { }

  ngOnInit() {
    this.animals.push({ name: "Cheetah" });
    this.animals.push({ name: "Puma" });
    this.animals.push({ name: "Jaguar" });
    this.animals.push({ name: "Panther" });
    this.animals.push({ name: "Tiger" });
  }
}