import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SidebarModule } from "./shared/sidebar/sidebar.module";
import { GifsModule } from "./gifs/gifs.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SidebarModule, GifsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
