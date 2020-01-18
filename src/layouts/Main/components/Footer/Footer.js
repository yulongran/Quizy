import React from 'react';
import { Typography } from '@material-ui/core';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"root"}>
                <Typography variant="caption" className={"footer-website-name"}>
                    &copy;{' '}
                    2020
                    QuizGo
                </Typography>
                <Typography variant="caption" className={"footer-author-name"}>
                    Author Yulong Ran
      </Typography>
            </div>
        )
    }
}



export default Footer;