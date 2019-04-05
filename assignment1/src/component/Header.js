import React, {
    Component
} from 'react';

class Header extends Component {
    render() {

        let { counter } = this.props;

        return (

            <header className='header'>
                Header
                <div className='counter'>
                    {counter}
                </div>

            </header>

        );
    }
}

export default Header;