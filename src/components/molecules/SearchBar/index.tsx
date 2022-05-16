import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import SearchIcon from "../../../images/searchicon.svg";
import theme from '../../../themes/theme';

const useStyles = makeStyles({
  inputElement: {
    fontSize: "16px",
    border: "none",
    width: 180,
    height: 24,
    fontFamily: 'Cera Pro',
    marginLeft: "32px",
    "&:focus": {
      outline: "none",
    },
  },
  boxElement: {
    width: 598,
    height: 28,
    backgroundColor: "",
    borderBottom: "1.5px solid #BAC9CF",
    display: "flex",
    flexDirection: "row",
  },
  imageDiv: {
    marginLeft: "2.96px",
    marginTop: "2.96px",
  },
  imageProps: {
    width: "18.39px",
    height: "18.39px",
  },
});

export const SearchBarComponent = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.boxElement}>
        <div className={classes.imageDiv}>
          <img src={SearchIcon} className={classes.imageProps} />
        </div>
        <input
          type="text"
          placeholder="Search by title or author"
          className={classes.inputElement}
        />
      </Box>
    </ThemeProvider>
  );
};
