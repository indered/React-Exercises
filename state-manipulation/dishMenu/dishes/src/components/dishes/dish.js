import React, { Component } from 'react';
import './main.css';

class Dishlist extends Component {


    // handleOnChange = (event) => {

    //     let newDish = {};
    //     newDish[event.target.name] = event.target.value

    //     this.setState({
    //         dish: {
    //             ...this.state.dish,
    //             ...newDish
    //         }
    //     })
    // }

    render() {
        let { dishes } = this.props;

        return (
            <div>
                <h1>MENU</h1>
                <ul>
                    {dishes.map((dish) => {
                        return (
                            <li>
                                <h3>Name: {dish.name}</h3>
                                <h3>Type: {dish.type}</h3>
                                <h3>Price: {dish.price}</h3>
                            </li>
                        )

                    })}
                </ul>
                <form className="addDishForm" >
                    <label>name</label>
                    <input type="text" name="name" />
                    <label>type</label>
                    <input type="text" name="desc" />
                    <label>price</label>
                    <input type="text" name="price" />
                    <label>status(available/unavailable)</label>
                    <input type="text" name="status" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Dishlist;
