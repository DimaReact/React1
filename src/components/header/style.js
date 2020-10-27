import React from 'react';
import {makeStyles} from  '@material-ui/core/styles';
import theme from '../theme/theme';

const useStyles = makeStyles(theme => ({
    root: {
        color: '#4299E1',
    },
    headerBtn: {
        width: '82px',
        backgroundColor: '#D53F8C',
        textTransform: 'none',
        marginRight: theme.spacing(4),
        '&:hover': {
            backgroundColor: '#D53F8C'
        }
    }
}));

export default useStyles;