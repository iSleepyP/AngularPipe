import { Pipe,PipeTransform } from "@angular/core";
import { of } from "rxjs";

@Pipe({//*important
    name:'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value: any,limit:number) {
        if(value.length > limit){
            return value.substr(0, limit) + '...' ; //return first 10 char
        }
        return value;
    }
}