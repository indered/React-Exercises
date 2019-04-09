import React, { Component, Fragment } from "react";
import { addToCart } from "../actions/actions";
import { connect } from "react-redux";
import "./style.css";

class Items extends Component {
  add = product => {
    console.log(this.props.products);
    let newProduct = {
      id: "",
      name: "",
      price: 0,
      qty: 0,
      amt: 0
    };
    newProduct.id = product.id;
    newProduct.name = product.name;
    newProduct.price = product.price;

    this.props.add(newProduct);
  };

  render() {
    return (
      <ul className="items-list">
        {this.props.products.map((item, index) => (
          <li>
            <img src={item.image} alt="itm" className="img" />
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            {(() => {
              if (item.quantity !== 0)
                return (
                  <Fragment>
                    <p>
                      In stock(
                      <h5>{item.quantity}</h5>)
                    </p>
                    <button
                      onClick={() => this.add(item)}
                      className="in-stock-btn"
                    >
                      Add to cart
                    </button>
                  </Fragment>
                );
              else
                return (
                  <Fragment>
                    <p>
                      Out of stock(<h5>{item.quantity}</h5>)
                    </p>
                    <button className="out-stock-btn">Add to cart</button>
                  </Fragment>
                );
            })()}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { store: state, products: state.products, cart: state.cart };
};

const mapDispatchToProps = dispatch => {
  return {
    add: product => dispatch(addToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
