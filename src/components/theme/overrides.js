const overrides = {
  MuiButton: {
    root: {
      color: "#fff",
    },
  },
  MuiPaper: {
    root: {
      boxShadow: "unset",
    },
  },
  MuiTableCell: {
    head: {
      color: "#2C5282",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "19px",
    },
  },
  MuiPagination: {
    ul: {
      paddingTop: "28px",
      justifyContent: "center",
    },
  },
  MuiPaginationItem: {
    root: {
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#2C5282",
    },
    page: {
      backgroundColor: "#E2E8F0",
      "&.Mui-selected, &.Mui-selected.Mui-focusVisible, &:hover, &.Mui-selected:hover": {
        color: "#fff",
        backgroundColor: "#2A4365",
      },
    },
  },
};

export default overrides