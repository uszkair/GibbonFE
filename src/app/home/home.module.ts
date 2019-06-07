import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeComponent } from './home.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

export const routerConfig = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routerConfig)
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
