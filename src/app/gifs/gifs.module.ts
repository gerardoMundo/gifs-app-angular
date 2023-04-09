import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./gifs-page/searh/search.component";
import { ResultsComponent } from "./gifs-page/results/results.component";

@NgModule({
  declarations: [SearchComponent, ResultsComponent],
  exports: [SearchComponent, ResultsComponent],
  imports: [CommonModule],
})
export class GifsModule {}
