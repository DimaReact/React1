import { createMuiTheme } from "@material-ui/core/styles";
import overrides from "./overrides";
import palette from "./palette";
import typography from "./typography";

const theme = createMuiTheme({
  overrides,
  palette,
  typography,
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