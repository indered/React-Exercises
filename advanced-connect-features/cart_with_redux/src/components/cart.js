import React, { Component } from "react";
import { removeFromCart, minusItem, plusItem } from "../actions/actions";
import { connect } from "react-redux";
import "./style.css";

class Cart extends Component {
  remove = id => {
    this.props.remove(id);
  };
  plus = id => {
    //checking if product is in stock
    const product = this.props.productState.find(p => p.id === id);
    if (product.quantity) this.props.plus(id);
  };
  minus = id => {
    //checking if the product quantity is above 0 is the in cart
    const product = this.props.products.find(p => p.id === id);
    console.log(product);
    if (product.qty) this.props.minus(id);
  };

  render() {
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        {(() => {
          if (this.props.products.length)
            return (
              <span className="total">
                <h6 id="gt-head">Grand Total</h6>
                <h5 id="gt">{this.props.total}</h5>
              </span>
            );
        })()}

        <ul className="cart-items">
          {this.props.products.map(item => (
            <li>
              <h3>{item.name}</h3>
              <p>
                <span>${item.price}</span>x
                <i
                  className="fas fa-minus-circle"
                  id="minus"
                  onClick={() => this.minus(item.id)}
                />
                <span className="qty">{item.qty}</span>
                <i
                  className="fas fa-plus-circle"
                  id="plus"
                  onClick={() => this.plus(item.id)}
                />
                <span className="amt">{item.amt}</span>
                <i
                  className="fas fa-times-circle"
                  id="cross"
                  onClick={() => this.remove(item.id)}
                />
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productState: state.products,
    cart: state.cart,
    products: state.cart.products,
    total: state.cart.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeFromCart(id)),
    plus: id => dispatch(plusItem(id)),
    minus: id => dispatch(minusItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
