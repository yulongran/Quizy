import React from 'react'
import './home.css';
import { Category } from './components';
import { connect } from 'react-redux';
import { fetchProgrammingCategoryQuiz } from '../../store/actions/Programming'
import { fetchMathCategoryQuiz} from '../../store/actions/Math';
import { fetchScienceCategoryQuiz} from '../../store/actions/Science';
import { fetchLanguageCategoryQuiz} from '../../store/actions/Language';
import { bindActionCreators } from 'redux';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMathCategoryQuiz();
        this.props.fetchProgrammingCategoryQuiz();
        this.props.fetchScienceCategoryQuiz();
        this.props.fetchLanguageCategoryQuiz();
    }

    render() {
        return (
            <div className={"discover-container"}>
                <div className={"discover-image-wrapper"}>
                    <img className={"discover-image"} src={require('../../assets/logo.jpg')} alt="reading"/>
                    <div className="logo-attribution">Photo by Taylor Leopold on Unsplash</div>
                    <div className={"discover-image-headline-wrapper"}>
                        <div className={"discover-image-headline"}>Learn Your Way Up</div>
                        <div className={"discover-image-sub-headline"}>You’ll learn more than just the book you read. </div>
                    </div>
                </div>
                <div className={"discover-content-wrapper"}>
                    <Category name="Programing" data={this.props.Programming.quizes} history={this.props.history}/>
                    <Category name="Math" data={this.props.Math.quizes} history={this.props.history}/>
                    <Category name="Science" data={this.props.Science.quizes} history={this.props.history}/>
                    <Category name="Language" data={this.props.Language.quizes} history={this.props.history}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { Quiz, Programming, Math, Science, Language } = state
    return { Quiz, Programming, Math, Science, Language }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchProgrammingCategoryQuiz,
        fetchMathCategoryQuiz,
        fetchScienceCategoryQuiz,
        fetchLanguageCategoryQuiz,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
