import { Component } from "@angular/core";
import { GifsService } from "src/app/gifs/services/gifs.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get gifsList() {
    return this.gifsService.gifsList;
  }

  reSearch(gifItem: string) {
    console.log(gifItem);
    this.gifsService.searchGifs(gifItem);
  }
}
