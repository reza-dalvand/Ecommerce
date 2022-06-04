import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  CheckOutMainBox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  checkOutForm: {
    padding: "15px !important",
    width: "95%",
    display: "flex",
    justifyContent: "center",

    "& input": {},
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
  textFieldNameAndFamily: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  checkOutFormName: {
    width: "100%",
    marginTop: "10px !important",
    marginBottom: "10px !important",
    [theme.breakpoints.up("md")]: {
      width: "48%",
      marginTop: "0 !important",
    },
  },
  CheckOutMainBoxInfoOrder: {
    margin: "15px",
    borderRadius: 15,
    backgroundColor: "#E8E7E7",
    padding: 20,
  },
  btnConfirm: {
    width: "100%",
  },
}));

export default useStyles;
