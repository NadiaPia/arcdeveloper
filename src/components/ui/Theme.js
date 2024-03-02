import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
// Here, we can customize a style. Otherwise, the default settings will be in effect

export default createTheme({
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
    tab: {
      fontFamily: 'Raileway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    }
  }
});
