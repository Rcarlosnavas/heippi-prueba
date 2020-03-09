import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

import { SharedModule } from "src/app/shared/shared.module";
import { FullLayoutComponent } from "src/app/shared/full-layout/full-layout.component";

const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "signInPage",
        pathMatch: "full"
      },
      {
        path: "signInPage",
        component: SignInComponent
      },
      {
        path: "signUpPage",
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // shared module
    SharedModule
  ]
})
export class AccountModule {}
