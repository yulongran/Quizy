import React from 'react';
import { Topbar, Footer } from './components';
import "./Main.css";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <div className="main-topbar-container">
                    <Topbar/>
                </div>
                <div className="main-content-children-wrapper">
                    {this.props.children}
                </div>
                <div className="main-footer-container">
                    <Footer/>
                </div>
            </div>
        )
    }
}



export default Main;