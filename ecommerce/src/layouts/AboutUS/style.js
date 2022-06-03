import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  description: {
    width: "98%",
    opacity: "0.7",
    [theme.breakpoints.up("sm")]: { width: "80%" },
    [theme.breakpoints.up("md")]: { width: "70%" },
  },
  headerTexts: {
    width: "90%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  infoBox: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: { flexDirection: "row" },
  },
  infoBoxItem: {
    opacity: "0.6",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginBottom: "15px !important",
    marginTop: "15px !important",
    fontFamily: "IRANSans !important",
  },
  countUpBox: {
    backgroundColor: "#E3E2E2",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: { flexDirection: "row" },
  },
  countUpBoxItem: {
    textAlign: "center",
  },
}));

export default useStyles;
