import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(
    value: string | null | undefined,
    limit: number = 100,
    suffix: string = '...'
  ): string {

    if (!value) {
      return '';
    }

    if (value.length <= limit) {
      return value;
    }

    return (
      value
        .substring(0, Math.max(0, limit - suffix.length))
        .trimEnd() + suffix
    );
  }
}