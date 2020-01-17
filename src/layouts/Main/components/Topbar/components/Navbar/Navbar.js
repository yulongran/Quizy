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
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/category">CATEGORY</a></li>
                    <li><a class="active" href="/discover">DISCOVER</a></li>
                </ul>
            </nav>
        )
    }
}



export default Navbar;