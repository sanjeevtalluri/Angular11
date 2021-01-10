import { Injectable } from "@angular/core";

import{ HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class CountriesService{
    constructor(private http:HttpClient){}

    getCountries():Observable<any>{
        return this.http.get("https://restcountries.eu/rest/v2/all");
    };

};