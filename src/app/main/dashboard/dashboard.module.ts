import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FullLayoutComponent } from "src/app/shared/full-layout/full-layout.component";
import { AdminComponent } from "./admin/admin.component";
import { FilterpipePipe } from "src/app/pipe/filterpipe.pipe";

const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboardPage",
        pathMatch: "full"
      },
      {
        path: "dashboardPage",
        component: DashboardComponent
      },
      {
        path: "adminPage",
        component: AdminComponent
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent, AdminComponent, FilterpipePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // shared module
    SharedModule
  ]
})
export class DashboardModule {}
