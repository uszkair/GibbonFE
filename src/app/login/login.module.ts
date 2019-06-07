import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from "~/app/login/login.component";
import { NativeScriptRouterModule } from 'nativescript-angular/router';

export const routerConfig = [
    {
        path: "",
        component: LoginComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routerConfig)
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
