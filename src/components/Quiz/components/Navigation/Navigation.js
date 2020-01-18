import React from 'react';
import './Navigation.css';
import Button from '@material-ui/core/Button';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz-navigation-container">
                <Button variant="contained" style={{ borderRadius: 15, width: 100, height: 40, marginLeft: 5, marginRight: 5 }}>PREVIOUS</Button>
                <Button variant="contained" style={{ borderRadius: 15, width: 100, height: 40, marginLeft: 5, marginRight: 5 }}>NEXT</Button>
            </div>
        )
    }
}



export default Navigation;