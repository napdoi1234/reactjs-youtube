import React, { Component } from 'react';
import Products from './../components/products'
import Product from './../components/product'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actAddToCart,actChangeMess} from './../actions/index';
class ProductContainer extends Component {
    render() {
        var {products}=this.props;
        return (
            <Products >
                {this.show(products)}
              
            </Products>
        );
    }
    show(product){
        var result=null;
        var {onAddToCart,onChangeMess}=this.props;
        if(product.length>0){
            result=product.map((product,index)=>{
                return <Product key={index} product={product}
                onAddToCart={onAddToCart}
                onChangeMess={onChangeMess}
                />
            });
        }
        return result;
    }
    
 
}
ProductContainer.propTypes={
    products:PropTypes.arrayOf(
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
    onChangeMess:PropTypes.func.isRequired
}
const mapStateToProps=state=>{
    return{
        products:state.product
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onAddToCart:(product)=>{
            dispatch(actAddToCart(product,1));
        },
        onChangeMess:(message)=>{
            dispatch(actChangeMess(message));
        }
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
