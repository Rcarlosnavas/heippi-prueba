/* Angular */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
/* Angular Material */
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
//component

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FullLayoutComponent } from "./full-layout/full-layout.component";
import { LoadingComponent } from "./loading/loading.component";
import { IndicatorComponent } from "../main/indicator/indicator.component";

const Material = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatIconModule
];

@NgModule({
  declarations: [
    ToolbarComponent,
    FullLayoutComponent,
    LoadingComponent,
    IndicatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // angular material
    Material
  ],
  exports: [
    // angular material
    Material,
    FullLayoutComponent,
    IndicatorComponent
  ]
})
export class SharedModule {}
