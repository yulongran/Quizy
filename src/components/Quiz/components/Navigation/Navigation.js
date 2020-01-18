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
                 <Button variant="contained" onClick={this.props.onPressPrevious} style={{ borderRadius: 15, width: 100, height: 40, marginLeft: 5, marginRight: 5 }}>Previous</Button>
                <Button variant="contained" onClick={this.props.onPressNext} style={{ borderRadius: 15, width: 100, height: 40, marginLeft: 5, marginRight: 5 }}>NEXT</Button>
            </div>
        )
    }
}



export default Navigation;