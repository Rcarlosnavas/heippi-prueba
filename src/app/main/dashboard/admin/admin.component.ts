import { Component, OnInit } from "@angular/core";
import { ApiServiceService } from "src/app/core/services/api-service.service";
import { User } from "src/app/core/interface";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  public userInfo: User[];
  public ng_value: string;

  constructor(private _apiServices: ApiServiceService) {}

  ngOnInit() {
    this._apiServices.getIndicator().then(result => {
      this.userInfo = result;
    });
  }
}
