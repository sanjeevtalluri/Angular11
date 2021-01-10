import { Component } from "@angular/core";

@Component({
    selector : "sjtl",
    templateUrl : "./first.component.html"
}

)
export class firstComponent{
    private sub_one: string;
   
    private sub_two: string;
  

    private sub_three: string;
 
    constructor(){
        this.sub_one="Angular";
        this.sub_two="Nodejs";
        this.sub_three="MongoDb";
    };
    public getSubOne():string{
        return this.sub_one;
    };
    public getSubTwo():string{
        return this.sub_two;
    };
    public getSubThree():string{
        return this.sub_three;
    };
    
};