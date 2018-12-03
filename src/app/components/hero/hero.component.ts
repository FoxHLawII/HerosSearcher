import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html"
})
export class HeroComponent implements OnInit {
  hero: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) {
    this.activatedRoute.params.subscribe(params => {
      let pos = params["id"];
      this.hero = heroService.getHeroByPos(pos);
    });
  }

  ngOnInit() {}
}
