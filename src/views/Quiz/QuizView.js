import React from 'react';
import { Quiz } from '../../components';
import './QuizView.css';

class QuizView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quizview-container">
                <Quiz goBack={this.props.history.goBack}/>
            </div>
        )
    }
}



export default QuizView;