import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ButtonsClearAndContinue: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  ButtonsClearAndContinueItem: {
    width: "180px",
    height: "40px",
    marginTop: "10px !important",
    marginBottom: "10px !important",
    [theme.breakpoints.up("sm")]: {
      marginTop: "15px !important",
      marginBottom: "15px !important",
    },
  },
  couponCode: {
    padding: "25px",
    width: "95%",
    backgroundColor: "#ece2e2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "250px",
    borderRadius: "15px",
  },
}));

export default useStyles;
