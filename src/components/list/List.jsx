import React from 'react';
import useStyles from './style';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import arrLists from './arrLists';


export default function MainContentList() {

    const classes = useStyles();

    return(
        <>
            <List 
                component="nav"
                aria-label="main mailbox folders"
                subheader={
                    <ListSubheader component="div" disableGutters='true' className={classes.listHeader}>
                        Manage
                    </ListSubheader>
                }
            >
            {
                arrLists.map((list) => {
                    if(list.listNumber === 1) {
                        return(
                            <ListItem button disableGutters='true'>
                                <ListItemIcon>
                                    {list.listIcon}
                                </ListItemIcon>
                                <ListItemText primary={list.listName} />
                            </ListItem>
                        );
                    }
                })
            }
            </List>
            <List 
                component="nav"
                aria-label="main mailbox folders"
                subheader={
                    <ListSubheader component="div" disableGutters='true' className={classes.listHeader}>
                        Pro features
                    </ListSubheader>
                }
            >
            {
                arrLists.map((list) => {
                    if(list.listNumber === 2) {
                        return(
                            <ListItem button disableGutters='true'>
                                <ListItemIcon>
                                    {list.listIcon}
                                </ListItemIcon>
                                <ListItemText primary={list.listName} />
                            </ListItem>
                        );
                    }
                })
            }
            </List>
        </>
    );
}