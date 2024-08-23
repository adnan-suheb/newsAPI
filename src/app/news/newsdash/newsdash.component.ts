import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-newsdash',
  templateUrl: './newsdash.component.html',
  styleUrls: ['./newsdash.component.scss']
})
export class NewsdashComponent implements OnInit {

  country: string = 'in';
  newsArr: any[] = [];
  searchVal!: string;


  constructor(
    private _newService: NewsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getNewsData();

  }

  getNewsData() {
    this._newService.countrySubject.subscribe(res => {
      if (res) {
        this.country = res;
        this._newService.fetchNewsForCountry(this.country).subscribe(res => {
          if (res) {
            this.newsArr = res.articles;
            console.log(this.newsArr);
            this._newService.newsObjSubject.next(this.newsArr[0])
            this._router.navigate(['/news', this.newsArr[0].title])
          }
        })
      }
    })

  }


  startDate: Date | null = null;
  endDate: Date | null = null;

  onDateChange(): void {
    if (this.startDate && this.endDate && this.startDate > this.endDate) {
      alert('Start date cannot be after end date');
      this.endDate = null;
    }
  }

  onSearch(eve: KeyboardEvent) {
    let val = (eve.target as HTMLInputElement).value;
    this._newService.querySubject.next(val);
    this.searchVal = val;
  }

}
