import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70% !important",
    [theme.breakpoints.down("sm")]: {
      width: "90% !important",
    },
  },
  infoForm: {
    width: "100% !important",
  },
  BoxNameAndFamily: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  fieldNameAndFamily: {
    width: "48% !important",
    paddingBottom: "20px !important",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  btnRegister: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
