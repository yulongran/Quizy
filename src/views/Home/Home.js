import React from 'react'
import './home.css';
import { Category } from './components';
import { connect } from 'react-redux';
import { fetchProgrammingCategoryQuiz } from '../../store/actions/Programming'
import { bindActionCreators } from 'redux';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProgrammingCategoryQuiz();
    }

    render() {
        return (
            <div className={"discover-container"}>
                <div className={"discover-image-wrapper"}>
                    <img className={"discover-image"} src={require('../../assets/logo.jpg')} />
                    <div className="logo-attribution">Photo by Taylor Leopold on Unsplash</div>
                    <div className={"discover-image-headline-wrapper"}>
                        <div className={"discover-image-headline"}>Learn Your Way Up</div>
                        <div className={"discover-image-sub-headline"}>You’ll learn more than just the book you read. </div>
                    </div>
                </div>
                <div className={"discover-content-wrapper"}>
                    <Category name="Programing" data={this.props.Programming.quizes} history={this.props.history}/>
                    <Category name="Programing" data={this.props.Programming.quizes} history={this.props.history}/>
                    <Category name="Programing" data={this.props.Programming.quizes} history={this.props.history}/>
                    <Category name="Programing" data={this.props.Programming.quizes} history={this.props.history}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { Quiz, Programming } = state
    return { Quiz, Programming }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchProgrammingCategoryQuiz,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
