import styles from '../styles/Header.module.css';
import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header(props) {

    const useStyles = makeStyles((theme) => ({
        grow: {
            flexGrow: 1,
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        app: {
            backgroundColor: '#F4EF88',
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <div>
                <img className={styles.Logo} src='images/bee-veggie.svg' />
            </div>
            
            <div className={classes.grow}>
                <AppBar className={classes.app} position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            {props.title}
                        </Typography>
                        
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            {props.icon1}
                            {props.icon2}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}