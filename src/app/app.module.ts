import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgsgModule } from 'ng-sortgrid';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './pages/index/index.component';
import { BoxshotsListComponent } from './components/boxshots-list/boxshots-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    IndexComponent,
    BoxshotsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgsgModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
