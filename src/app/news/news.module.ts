import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsdashComponent } from './newsdash/newsdash.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { MaterialModule } from '../material/material.module';
import { AppRounting } from '../app-routing.routing';
import { FormsModule } from '@angular/forms';
import { QueryPipe } from './model/query.pipe';
import { DateRangePipe } from './model/date-range.pipe';



@NgModule({
  declarations: [
    NewsdashComponent,
    NewsListComponent,
    SingleNewsComponent,
    QueryPipe,
    DateRangePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRounting,
    FormsModule,
  ],
  exports: [NewsdashComponent,
    QueryPipe
  ]
})
export class NewsModule { }
