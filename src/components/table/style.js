import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableButton: {
    backgroundColor: "#2A4365",
    textTransform: "none",
    padding: "12px 24px 10px 14px",
    "&:hover": {
      backgroundColor: "#2A4365",
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
    borderSpacing: "0 19px",
  },
  tableBodyRow: {
    background: "#F7FAFC",
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