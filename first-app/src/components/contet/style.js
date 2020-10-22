import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    gridContainer : {
        height: 'calc(100vh - 64px)'
    },
    listWrapper: {
        padding: theme.spacing(9),
        backgroundColor: '#F7FAFC',
    },
    tableWrapper: {
        padding: theme.spacing(6),
    }
}));

export default useStyles;