import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, GifsResponse } from "../interfaces/gifs.interface";

@Injectable({
  providedIn: "root",
})
export class GifsService {
  private apiKey = "Y4lrJZpQsmFLxVIe0nHwhmwswNgrPMRA";
  private baseUrl = "https://api.giphy.com/v1/gifs";
  private _gifsList: string[] = [];

  public gifs: Gif[] = [];

  get gifsList() {
    return [...this._gifsList];
  }

  constructor(private http: HttpClient) {
    this._gifsList = JSON.parse(localStorage.getItem("gifsList") || "[]");

    this.gifs = JSON.parse(localStorage.getItem("lastGifs") || "[]");
  }

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (query.length <= 1) return;

    if (!this._gifsList.includes(query)) {
      this._gifsList.unshift(query);
      this._gifsList = this._gifsList.slice(0, 10);

      localStorage.setItem("gifsList", JSON.stringify(this._gifsList));
    }

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", query)
      .set("limit", "12")
      .set("lang", "eng");

    this.http
      .get<GifsResponse>(`${this.baseUrl}/search`, { params })
      .subscribe(resp => {
        this.gifs = resp.data;
        localStorage.setItem("lastGifs", JSON.stringify(this.gifs));
      });
  }
}
