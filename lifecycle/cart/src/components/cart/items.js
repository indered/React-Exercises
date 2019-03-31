import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Items extends Component {
  state = {
    item: {
      name: "",
      qty: 0,
      price: 0
    }
  };

  total = 0;

  handldeChange = event => {
    let newItem = {};
    let formInput = event.target.value.split("-");
    newItem.name = formInput[0];
    newItem.price = formInput[1];
    newItem.qty = 1;
    newItem.total = newItem.price * newItem.qty;
    this.setState({
      item: newItem
    });
  };

  render() {
    return (
      <div>
        <h1 className="heading"> My Cart</h1>

        <form
          className="addItemForm"
          onSubmit={e => this.props.add(e, this.state.item)}
        >
          <input
            onChange={this.handldeChange}
            type="text"
            name="name"
            placeholder="Enter item and price separated by a - (hyphen)"
          />
        </form>

        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Decrease Item</th>
            <th>Increase Items</th>
            <th>Remove Item</th>
          </tr>

          {this.props.items.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.total}</td>
                <td>
                  <button
                    className="minus"
                    onClick={() => this.props.minusItem(index)}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    className="plus"
                    onClick={() => this.props.plusItem(index)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="remove"
                    onClick={() => this.props.removeItem(index)}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        <h2>Grand Total :
        {this.props.items.map(item => {
              this.total+=item.total;
        });
        return({this.total});
        
        }
        </h2>
      </div>
    );
  }
}
export default Items;
