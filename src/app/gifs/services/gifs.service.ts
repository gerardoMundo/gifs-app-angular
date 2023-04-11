import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GifsService {
  private _gifsList: string[] = [];

  get gifsList() {
    return [...this._gifsList];
  }

  apiKey = "Y4lrJZpQsmFLxVIe0nHwhmwswNgrPMRA";

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (query.length <= 1 || this._gifsList.includes(query)) return;

    this._gifsList.unshift(query);
    this._gifsList = this._gifsList.slice(0, 10);
  }
}
