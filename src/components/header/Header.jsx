import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Button, Grid, Avatar} from "@material-ui/core";
import LogoIcon from '../../icons/LogoIcon';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import avatarImg from '../../static/img/avatar.jpg'


export default function MenuAppBar() {

    const classes = useStyles();

    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid container xs={6}>
                        <Grid item>
                            <LogoIcon />
                        </Grid>
                        <Grid item>
                            <Typography variant="span">Rival</Typography>
                            <Typography className={classes.root} variant="span">CMS</Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={6} justify='flex-end'>
                        <Button variant="text" className={classes.headerBtn}>Pro plan</Button>
                        <Avatar alt="Remy Sharp" src={avatarImg} />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}