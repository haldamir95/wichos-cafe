import { OrderRow } from "@/types";

export const isEmpty = (obj:any):Boolean => Object.keys(obj).length === 0;

export const areAllValuesEmpty = (obj:any): Boolean => Object.values(obj).every(value => value === '');

export const mapCollumsToRows = (drinks?:string[],complements?:string[],types?:string[],sugars?:string[],sizes?:string[]) => {
    const productsList:Array<OrderRow>=[];
    drinks?.forEach((item, index)=>{
        const newOrderRow:OrderRow = {
            key: index.toString(),
            drink: drinks[index]
        }
        if (complements && complements[index] !== undefined) {
            newOrderRow.complement = complements[index];
        }
        if(types && types[index] !== undefined) {
            newOrderRow.type = types[index]
        }
        if(sugars && sugars[index] !== undefined){
            newOrderRow.sugar = sugars[index]
        }
        if(sizes && sizes[index] !== undefined){
            newOrderRow.size = sizes[index]
        }
        productsList.push(newOrderRow)
    })
    return productsList
}