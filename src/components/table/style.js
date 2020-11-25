import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableButton: {
    backgroundColor: theme.palette.primary.light,
    textTransform: "none",
    padding: theme.spacing(1.5, 3, 1.25, 1.75),
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  published: {
    width: "68px",
    borderRadius: "50px",
    padding: theme.spacing(1, 3),
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
  },
  draft: {
    width: "68px",
    borderRadius: "50px",
    padding: theme.spacing(1, 3),
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
  },
  scheduled: {
    width: "68px",
    borderRadius: "50px",
    padding: theme.spacing(1, 3),
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: theme.palette.warning.main,
    color: theme.palette.warning.main,
  },
  table: {
    borderCollapse: "separate",
    borderSpacing: theme.spacing(0, 2.375),
  },
  tableBodyRow: {
    background: theme.palette.grey[50],
  },
  tableBodyCell: {
    border: "none",
    padding: theme.spacing(4),
  },
  tableViews: {
    padding: theme.spacing(0, 1),
  },
}));

export default useStyles;