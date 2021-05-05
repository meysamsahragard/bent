import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'month'})
export class MonthPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value: string | null): string {
    const result = `
            <b style="font-size: .8rem;">${value}</b>
            <b style="font-size: .5rem;">/month</b>`;
    return this.sanitized.bypassSecurityTrustHtml(result) as string;
  }
}
