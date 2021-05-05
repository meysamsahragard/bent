import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'year'})
export class YearPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value: string | null): string {
    const result = `
        <b style="font-size: 1.3rem;">${value}</b>
        <b style="font-size: .7rem;">/year</b>`;

    return this.sanitized.bypassSecurityTrustHtml(result) as string;
  }
}
