import { Component } from "@angular/core";

@Component({
    selector:"sjheader",
    templateUrl:"./header.component.html",
    styleUrls:['./header.component.css']
})

export class headerComponent{
    private title:string;
    constructor(){
        this.title="ECommerce";
    }
    public getTitle(){
        return this.title;
    };
};