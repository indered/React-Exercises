import React, { Component } from 'react';

export default class Counter extends Component {


    render() {
        let { counter, index } = this.props;

        const { inCounter, decCounter } = this.props;


        return (
            <div className='counter'>
                <span> {counter} </span>
                <button className='btn' onClick={() => inCounter(index)}>+</button>
                <button className='btn' onClick={() => decCounter(index)}>-</button>
            </div>

        );
    }


}
