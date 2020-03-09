import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}
  /**
   * redirect to SignUp
   * @param event Event
   */
  goToSignUp(event: Event) {
    // stop propagation
    event.stopPropagation();
    // prevent event
    event.preventDefault();
    this._router.navigate(["account/signUpPage"]);
  }
  /**
   * redirect to dashBoard
   * @param event Event
   */
  goToDashboard(event) {
    // stop propagation
    event.stopPropagation();
    // prevent event
    event.preventDefault();
    this._router.navigate(["dashboard/dashboardPage"]);
  }
  /**
   * redirect to SignIn
   * @param event Event
   */
  goToSignIn(event) {
    // stop propagation
    event.stopPropagation();
    // prevent event
    event.preventDefault();
    this._router.navigate(["account/signInPage"]);
  }
}
