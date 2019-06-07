import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";
import { AppRoutingModule, routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptFacebookModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
