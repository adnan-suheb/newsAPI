import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {

  newsObj: any = [];

  constructor(
    private _routes: ActivatedRoute,
    private _newsService: NewsService
  ) { }

  ngOnInit(): void {
    this._newsService.newsObjSubject.subscribe(res => {
      if (res) {
        this.newsObj = res;
      }
    })
  }

}
