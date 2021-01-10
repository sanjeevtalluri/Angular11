import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { CountriesModel } from "../models/countries.model";
import { CountriesService } from "../services/countries.service";

@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class CountriesComponent{
    response:any;
    constructor(private service:CountriesService){}

    ngOnInit(){
        this.service.getCountries().subscribe((res)=>{this.response=res;},(err:HttpErrorResponse)=>{console.log(err)});
    }

}