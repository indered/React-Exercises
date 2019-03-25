import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        count: 0
    }

    inCounter = () => {

        this.setState({
            count: ++this.state.count
        })

    }

    decCounter = () => {

        this.setState({
            count: --this.state.count
        })
    }



    render() {
        // const inCounter = this.props.inCounter;
        return (
            <div className='counter'>
                <span>{this.state.count}</span>
                <button className='btn' onClick={this.inCounter}>+</button>
                <button className='btn' onClick={this.decCounter}>-</button>
            </div>

        );
    }


}
