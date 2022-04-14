import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  hambergerMenu: {
    display: "none !important",

    [theme.breakpoints.down("md")]: {
      display: "flex !important",
      marginLeft: "5px !important",
    },
  },
  hamberMenuItem: {
    textAlign: "right !important",
  },
}));

export default useStyles;
