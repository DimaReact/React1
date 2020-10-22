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
    //boxSizing
    width: "68px",
    padding: "8px 24px 7px",
    border: "2px solid #9AE6B4",
    borderRadius: "50px",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#9AE6B4",
    textAlign: "center",
    textTransform: "capitalize",
  },
  draft: {
    width: "68px",
    padding: "8px 24px 7px",
    border: "2px solid #FC8181",
    borderRadius: "50px",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FC8181",
    textAlign: "center",
    textTransform: "capitalize",
  },
  scheduled: {
    width: "68px",
    padding: "8px 24px 7px",
    border: "2px solid #FBD38D",
    borderRadius: "50px",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FBD38D",
    textAlign: "center",
    textTransform: "capitalize",
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
  tableTitle: {
    marginBottom: "4px",
  },
  tableViews: {
    padding: theme.spacing(0, 1),
  },
}));

export default useStyles;