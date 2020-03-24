import * as types from './../constant/actionType';
var data=JSON.parse(localStorage.getItem('CART'));
var initialState=data?data:[];

const carts=(state=initialState,action)=>{
    var {product,quantity}=action;
    var index=-1;
    switch(action.type){
        case types.ADD_TO_CART:
            index=findProInCart(state,product);
            if(index!==-1){
                state[index].quantity+=quantity;
            }else
            state.push({
                product,
                quantity
            })
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.DEL_CART:
            index=findProInCart(state,product);
            if(index!==-1)
            state.splice(index,1);
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.UPDATE_CART:
            index=findProInCart(state,product);
            if(index!==-1){
                state[index].quantity=quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default:return[...state];
    }
}
var findProInCart=(cart,pro)=>{
    var index=-1;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            if(pro.id===cart[i].product.id){
                index=i;
                break;
            }
        }
    }
    return index;
}
export default carts;