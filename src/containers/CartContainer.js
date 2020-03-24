import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Carts from './../components/carts'
import * as Message from './../constant/Message';
import CartItem from './../components/cartItem';
import CartResult from './../components/cartResult'
import * as act  from './../actions/index';
class CartContainer extends Component {
    render() {
        var {cart,onDelCart,onChangeMess,onUpQuantity}=this.props;
        return (
            <Carts>
                {this.showCard(cart,onDelCart,onChangeMess,onUpQuantity)}
                {this.showTotal(cart)}
            </Carts>
        );
    }
    showCard=(cart,onDelCart,onChangeMess,onUpQuantity)=>{
        var result=<tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if(cart.length>0){
            result=cart.map((item,index)=>{
                return(
                    <CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDelCart={onDelCart}
                    onChangeMess={onChangeMess}
                    onUpQuantity={onUpQuantity}
                    />
                );
            });
        }
        return result;
    }
    showTotal=(cart)=>{
        var result=null;
        if(cart.length>0){
            result=<CartResult cart={cart}/>
        }
        return result;
    }
}
CartContainer.propTypes={
    cart:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            des:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired,
    quantity:PropTypes.number.isRequired
}
const mapStateToProps=state=>{
    return{
        cart:state.carts
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onDelCart:(product)=>{
            dispatch(act.actDelCart(product));
        },
        onChangeMess:(message)=>{
            dispatch(act.actChangeMess(message));
        },
        onUpQuantity:(product,quantity)=>{
            dispatch(act.actUpCart(product,quantity))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
