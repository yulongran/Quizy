import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Navbar} from './components';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: '#222831',
        fontFamily:'PlayfairDisplay',
        fontWeight: 'bold',
        flex:1,
    },
    appBar: {
        paddingLeft: '25px',
        paddingRight: '25px',
        backgroundColor: 'white',
        display:'flex',
    },
    navBar: {
        flex:1,
        position:'relative',
        textAlign:'right',
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} variant="h5" noWrap>
                        Quizy
                    </Typography>
                    <div className={classes.navBar}>
                        <Navbar/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}