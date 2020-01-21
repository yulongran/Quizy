import React from 'react';
import './Category.css';
import {Quiz} from './components';

class Categroy extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props)
        return (
            <div className={"discover-content-category-section-container"}>
    <p className={"discover-content-category-header"}>{this.props.name}</p>
                <div className={"discover-content-category-list"}>
                    {this.props.data.map((quiz)=>{
                        return < Quiz quiz={quiz}/>
                    })}
                </div>
            </div>
        )
    }
}


export default Categroy;