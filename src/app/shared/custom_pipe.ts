//write a pipe that converts a string to uppercase
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'upper'
})
export class UpperPipe implements PipeTransform {
    transform(value: string): string {
        return value.toUpperCase();
    }
}