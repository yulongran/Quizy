import React from 'react';
import './Navigation.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCurrentQuestionIndex, decrementCurrentQuestionIndex} from '../../../../store/actions/Quiz';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz-navigation-container">
                <Button variant="outlined" color="secondary" disabled={this.props.Quiz.onStart} onClick={this.props.decrementCurrentQuestionIndex} style={{ borderRadius: 15, width: 100, height: 40, marginLeft: 5, marginRight: 5 }}>Previous</Button>
                <Button variant="outlined" color="secondary" disabled={this.props.Quiz.onEnd} onClick={this.props.incrementCurrentQuestionIndex} style={{ borderRadius: 15, width: 100, height: 40, marginLeft: 5, marginRight: 5 }}>NEXT</Button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { Quiz } = state
    return { Quiz }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        incrementCurrentQuestionIndex,
        decrementCurrentQuestionIndex,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
