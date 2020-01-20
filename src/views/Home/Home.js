import React from 'react';
import DiscoverLogo from '../../assets/images/download.png';
import './home.css';
import {Category, Quiz} from './components';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const QUIZ =[
            {
                title: "Data Structure and Algorithms",
                questions: 10,
                author: "Mary",
            },
            {
                title: "Database Management",
                questions: 10,
                author: "Mary",
            },
            {
                title: "Java Programming",
                questions: 13,
                author: "Mary",
            },
            {
                title: "MYSQL Database",
                questions: 12,
                author: "Mary",
            },

        ]
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
                    <div className={"discover-content-category-section-container"}>
                        <p className={"discover-content-category-header"}>Recommand Category</p>
                        <div className={"discover-content-category-list"}>
                            <Category image={require('../../assets/images/category/Language.png')} subject="Language"/>
                            <Category image={require('../../assets/images/category/Math.png')} subject="Math"/>
                            <Category image={require('../../assets/images/category/Programming.png')} subject="Programming"/>
                            <Category image={require('../../assets/images/category/History.png')} subject="History"/>
                            <Category image={require('../../assets/images/category/Science.png')} subject="Science"/>
                            <Category image={require('../../assets/images/category/Art.png')} subject="Art"/>
                        </div>
                    </div>
                    <div className={"discover-content-category-section-container"}>
                        <p className={"discover-content-category-header"}>Top Quiz</p>
                        <div className={"discover-content-category-list"}>
                            <Quiz quiz={QUIZ[0]} history={this.props.history}/>
                            <Quiz quiz={QUIZ[1]}/>
                            <Quiz quiz={QUIZ[2]}/>
                            <Quiz quiz={QUIZ[2]}/>
                            <Quiz quiz={QUIZ[1]}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default HomeView;