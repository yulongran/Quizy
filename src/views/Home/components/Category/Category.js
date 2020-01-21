import React from 'react';
import './Category.css';
import { Quiz } from './components';

class Categroy extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"discover-content-category-section-container"}>
                <p className={"discover-content-category-header"}>{this.props.name}</p>
                <div className={"discover-content-category-list"}>
                    {this.props.data.map((quiz) => {
                        return < Quiz quiz={quiz} history={this.props.history}/>
                    })}
                </div>
            </div>
        )
    }
}


export default Categroy;