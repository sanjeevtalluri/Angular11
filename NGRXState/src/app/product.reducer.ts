import { Product } from "./product.model";


export function addProductReducer(state:Product[]=[],action){
    switch(action.type){
        case "Add_Product":
            return [...state,action.payload];
        default:
            return state;
    }

}