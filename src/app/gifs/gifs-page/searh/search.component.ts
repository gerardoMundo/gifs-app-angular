import { Component, ElementRef, ViewChild } from "@angular/core";
import { GifsService } from "../../services/gifs.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: [],
})
export class SearchComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild("txtSearch") txtSearch!: ElementRef<HTMLInputElement>;

  addQuery() {
    const value = this.txtSearch.nativeElement.value;

    this.gifsService.searchGifs(value);

    this.txtSearch.nativeElement.value = "";
  }
}
