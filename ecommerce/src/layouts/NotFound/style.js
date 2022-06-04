import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  NotFoundBox: {
    width: "90%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  BackToHomePageBtn: {
    height: "50px",
  },
}));

export default useStyles;
