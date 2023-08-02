import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'static',
})
export class StaticSourcePipe implements PipeTransform {
  transform(src: string | undefined): string {
    if (src) return environment.apiUrl + src;
    else return environment.apiUrl;
  }
}
