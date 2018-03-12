import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
 import { HomeRoutes } from './home.component.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        RouterModule.forChild(HomeRoutes),
        CommonModule
    ],
    exports: [RouterModule],
    providers: [],

})
export class HomeModule { }
