import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-indicator",
  templateUrl: "./indicator.component.html",
  styleUrls: ["./indicator.component.scss"]
})
export class IndicatorComponent implements OnInit {
  @Input("value") public value: number = undefined;
  @Input("title") public title: string;

  constructor() {}

  ngOnInit() {}
}
