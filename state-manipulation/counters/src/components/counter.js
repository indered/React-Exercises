import React, { Component } from 'react';

export default class Counter extends Component {

    // state = {
    //     count: this.props.count
    // }

    render() {
        let count = this.props.count;
        const { increase, decrease } = this.props;


        return (
            <div className='counter'>
                <span>{count}</span>
                <button className='btn' onClick={increase}>+</button>
                <button className='btn' onClick={decrease}>-</button>
            </div>

        );
    }


}
