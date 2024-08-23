import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Input() newsObj!: any;

  constructor(
    private _newsService: NewsService
  ) { }

  ngOnInit(): void {
  }

  onNewsClick(obj: any) {
    this._newsService.newsObjSubject.next(this.newsObj)
  }

}
