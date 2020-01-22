import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="https://github.com/yulongran/Quizy">ABOUT</a></li>
                    <li><a className="active" href="/">DISCOVER</a></li>
                </ul>
            </nav>
        )
    }
}



export default Navbar;