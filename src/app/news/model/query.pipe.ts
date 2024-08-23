import { Pipe, PipeTransform } from '@angular/core';
import { Inews } from './newsArr.interface';

@Pipe({
  name: 'query'
})
export class QueryPipe implements PipeTransform {

  transform(newsArr: Inews[], searchVal: string) {
    let filterredNewsData: Inews[] = [];
    if (!newsArr) {
      return []
    }
    if (!searchVal) {
      return newsArr
    }

    filterredNewsData = newsArr.filter(news => {
      // return news.title.includes(searchVal)
      return news.title.toLowerCase().includes(searchVal.toLowerCase())
    })
    return filterredNewsData;
  }

}
