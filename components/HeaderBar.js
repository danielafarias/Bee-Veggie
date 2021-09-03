import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from '../styles/Header.module.css';

export default function HeaderBar(props) {

    return (
        <div className={styles.grow}>
            <AppBar position='static'>
                <Toolbar>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <Typography variant="h6" noWrap>
                                {props.title}
                            </Typography>  
                        </Grid>
                        <Grid item>
                            {props.icon1}
                            {props.icon2}
                            <IconButton href='https://github.com/danielafarias/Bee-Veggie' rel='noreferrer' target='_blank'>
                                <GitHubIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}