import React from 'react';
import useStyles from './style';
import { Grid } from '@material-ui/core';
import List from '../list/List'
import Table from '../table/Table'

export default function MainContent() {

    const classes = useStyles();

    return(
        <Grid container className={classes.gridContainer}>
            <Grid item xs={2} className={classes.listWrapper}>
                <List />
            </Grid>
            <Grid item className={classes.tableWrapper} xs={10}>
                <Table />
            </Grid>
        </Grid>
    );
}