import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

  transform(newsArr: any[], startDate: Date | null, endDate: Date | null): any[] {
    if (!newsArr || (!startDate && !endDate)) {
      return newsArr;
    }

    return newsArr.filter(news => {
      const newsDate = new Date(news.publishedAt);
      if (startDate && endDate) {
        return newsDate >= startDate && newsDate <= endDate;
      } else if (startDate) {
        return newsDate >= startDate;
      } else if (endDate) {
        return newsDate <= endDate;
      }
      return true;
    });
  }

}
