import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
    transform(value: number): string {
        if (value === 0) return '0';
        
        if (!value) return;

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}