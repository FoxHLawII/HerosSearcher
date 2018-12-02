import { Component, OnInit } from "@angular/core";
import { HeroService, Hero } from "../../services/hero.service";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit {
  heros: Hero[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heros = this.heroService.getAllHeros();
  }
}
