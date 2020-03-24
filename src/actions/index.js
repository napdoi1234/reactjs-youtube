import * as types from './../constant/actionType';

export const actAddToCart=(product,quantity)=>{
    return{
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMess=(message)=>{
    return{
        type:types.CHANGE_MES,
        message
    }
}
export const actDelCart=(product)=>{
    return{
        type:types.DEL_CART,
        product
    }
}
export const actUpCart=(product,quantity)=>{
    return{
        type:types.UPDATE_CART,
        product,
        quantity
    }
}