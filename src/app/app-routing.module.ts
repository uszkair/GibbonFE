import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

export const routes = [
    {
        path: "home",
        loadChildren: "./home/home.module#HomeModule"
    },
    {
        path: "login",
        loadChildren: "./login/login.module#LoginModule"
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
