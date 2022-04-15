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
    fontWeight: "600 !important",
    color: "#000 !important",
    "&:hover": {
      color: "#1976d2 !important",
    },
    "& span": {
      fontSize: "18px",
    },
  },
  hamberMenuContact: {
    display: "flex",
    alignItems: "center",
    width: "55%",
    fontSize: 16,
    marginLeft: 20,
  },
  hamberMenuContactPhone: {
    color: "#000 !important",
    "&:hover": {
      color: "#1976d2 !important",
    },
  },
  hamberMenuSocial: {
    display: "flex",
    width: "100%",
    justifyContent: "center !important",
  },
}));

export default useStyles;
