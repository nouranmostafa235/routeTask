import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNames'
})
export class SearchNamesPipe implements PipeTransform {

  transform(names:any , searchTerm:any): any {
    return names.filter((name:any)=>name.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
