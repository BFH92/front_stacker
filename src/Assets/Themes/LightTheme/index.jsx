import { createTheme} from "@material-ui/core";

const LightTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(92, 30, 226)',
    },
    success: {
      main: 'rgb(76, 175, 80)',
    }
  },
  // typography: {
  //   h1: {
  //     fontWeight: 800,
  //     fontSize: "600px"
  //   }
  // }
});

export default LightTheme