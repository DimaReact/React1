import React from 'react';
import Table from '@material-ui/core/Table';
import { Grid, Typography, Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import arrTableRow from './arrTable';
import useStyles from './style';
import PenBtnIcon from '../../icons/PenBtnIcon';
import Menu from '../menu/Menu';
import UpViews from '../../icons/UpViews';
import Pagination from '@material-ui/lab/Pagination';

export default function BasicTable() {
  const classes = useStyles();
  return (
    <div>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Stats</TableCell>
              <TableCell>
                  <Button className={classes.tableButton} startIcon={<PenBtnIcon />}>Add new</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrTableRow.map((row) => (
              <TableRow className={classes.tableBodyRow}>
                <TableCell className={classes.tableBodyCell}>
<<<<<<< HEAD
                    <Typography variant='h3' className={classes.tableTitle}>{row.rowTitle}</Typography>
                    <Typography variant='subtitle1'>{row.rowDate}</Typography>
=======
                    <Typography variant='h3' gutterBottom>{row.title}</Typography>
                    <Typography variant='subtitle1'>{row.date}</Typography>
>>>>>>> bugfix/fix_first_app
                </TableCell>
                <TableCell className={classes.tableBodyCell}>
                    <Typography component='div' className={classes[row.rowStatus]}>{row.rowStatus}</Typography>
                </TableCell>
                <TableCell className={classes.tableBodyCell}>
                  <Grid container alignItems='center'>
                    <Typography variant='caption'>{row.rowViews}</Typography>
                    <Typography variant='subtitle1' className={classes.tableViews}>views</Typography>
<<<<<<< HEAD
                    {row.rowViews > 0 ? <UpViews /> : ''}
=======
                    {row.views > 0 ? <UpViews /> : ''}
>>>>>>> bugfix/fix_first_app
                  </Grid>
                </TableCell>
                <TableCell className={classes.tableBodyCell}><Menu /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={3} hidePrevButton hideNextButton />
    </div>
  );
}