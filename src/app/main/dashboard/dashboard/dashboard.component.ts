import { Component, OnInit } from "@angular/core";
import { ApiServiceService } from "src/app/core/services/api-service.service";
import * as _interfaces from "src/app/core/interface";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public totalUser: number;
  public totalPosts: number;
  public totalTodos: _interfaces.UserPosts[];
  constructor(private _apiService: ApiServiceService) {}

  ngOnInit() {
    this._apiService.getIndicator().then(result => {
      this.totalUser = result.length;
    });

    this._apiService
      .getUserPosts("1")
      .subscribe((result: _interfaces.UserPosts[]) => {
        this.totalPosts = result[0].userId;
      });

    this._apiService
      .getUserTodos()
      .subscribe((result: _interfaces.UserPosts[]) => {
        this.totalTodos = result;
        console.log(result);
      });
  }
}
