import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
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
  },
  palette: {
    primary: {
      main: "#2D3748",
    },
    secondary: {
      main: "#2D3748",
    },
    info: {
      light: "#4299E1",
      main: "#2C5282",
    },
  },
  typography: {
    h3: {
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "21px",
      color: "#2A4365",
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "16px",
      color: "#A0AEC0",
    },
    caption: {
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "23px",
      color: "#2A4365",
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        span: "span",
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;