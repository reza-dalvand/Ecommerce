import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  MainBox: {
    margin: "auto",
    padding: "2%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  infoMain: {
    backgroundColor: "#dbd5d5",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: 550,
  },
  container: {
    display: "flex",
    width: "80%",
  },
  infoBoxItem: { display: "flex", alignItems: "center", width: "100%" },
  circleIconInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    border: "1px solid ",
    borderRadius: "50%",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    marginLeft: "3%",
  },
  textInfo: {
    opacity: "0.7",
    marginRight: "1%",
  },

  containerSendTicket: {
    margin: "auto",
    padding: "10%",
    backgroundColor: "#dbd5d5",
    height: 550,
  },
  nameAndEmailField: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  inputText: {
    width: "48%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  emailLink: {
    display: "block",
    opacity: "0.7",
    color: "black !important",
    "&:hover": {
      color: "blue !important",
    },
  },
}));

export default useStyles;
