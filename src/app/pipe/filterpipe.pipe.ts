import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterpipe"
})
export class FilterpipePipe implements PipeTransform {
  transform(list: Array<any>, value: string): Array<any> {
    if (!value) {
      return list;
    } else {
      return list.filter((user: { name: string }) =>
        user.name.toUpperCase().includes(value.toUpperCase())
      );
    }
  }
}
