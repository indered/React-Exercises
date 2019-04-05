import React, { Component } from 'react';

export default class Main extends Component {

    render() {
        const { counter, reset } = this.props;
        return (
            <section className='main'> Main

            <button className='btn' onClick={counter}>Click</button>
                <button className='btn' onClick={reset}>Reset</button>

            </section>


        );
    }


}
