import React from 'react';
import './Progress.css';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const styles = {
    buttonStyle: { margin: 5, backgroundColor:'red'},
}
class Progress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz-progress-container">
                <div className="quiz-progress-header">
                    <Typography variant="h7" color="textSecondary">
                        Progress
                    </Typography>
                </div>
                <div className="quiz-progress-tracker">
                    <Button variant="contained" style={styles.buttonStyle} color="red">
                        1
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        2
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        3
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        4
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        5
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        6
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        7
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        8
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        9
                    </Button>
                    <Button variant="contained"  style={styles.buttonStyle}>
                        10
                    </Button>

                </div>
                <div className="quiz-progress-placeholder">

                </div>
            </div>
        )
    }
}



export default Progress;