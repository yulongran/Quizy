import React from 'react';
import { Topbar } from './components';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Topbar/>
                {this.props.children}
            </div>
        )
    }
}



export default Main;