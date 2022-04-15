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
  hamberMenuContact: {
    display: "flex",
    alignItems: "center",
    width: "55%",
    fontSize: 16,
    marginLeft: 20,
  },
  hamberMenuSocial: {
    display: "flex",
    width: "100%",
    justifyContent: "center !important",
  },
}));

export default useStyles;
