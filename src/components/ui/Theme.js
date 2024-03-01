import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
// Here, we can customize a style. Otherwise, the default settings will be in effect

export default createMuiTheme({
  palette: {
    common: {
     blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
        main: arcBlue
    },
    secondary: {
        main: arcOrange
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    }
  }
});
