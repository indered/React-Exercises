import React, { Component, Fragment } from "react";
import { removeFromCart, minusItem, plusItem } from "../actions/actions";
import { connect } from "react-redux";
import "./style.css";

class Cart extends Component {
  remove = id => {
    this.props.remove(id);
  };
  plus = id => {
    this.props.plus(id);
  };
  minus = id => {
    this.props.minus(id);
  };

  render() {
    return (
      <div className="cart">
        <h1>Your Cart</h1>

        <ul className="cart-items">
          {this.props.products.map(item => (
            <li>
              <h3>{item.name}</h3>
              <span>${item.price}</span>x
              <i
                className="fas fa-minus-circle"
                id="minus"
                onClick={() => this.minus(item.id)}
              />
              <span>{item.qty}</span>
              <i
                className="fas fa-plus-circle"
                id="plus"
                onClick={() => this.plus(item.id)}
              />
              <span>{item.amt}</span>
              <i
                className="fas fa-times-circle"
                id="cross"
                onClick={() => this.remove(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
