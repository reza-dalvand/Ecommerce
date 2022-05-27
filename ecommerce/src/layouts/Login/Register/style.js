import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  inputFields: {
    maxWidth: 700,
    width: "90%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    border: "1px solid",
    borderColor: "#FCF4F4",
    borderRadius: "5px",
    boxShadow: "0 0 6px rgba(0,0,0,.1)",
    padding: "5%",
  },
  // leftNavbarFilters: {
  //   display: "flex",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   [theme.breakpoints.down("xs")]: {
  //     flexDirection: "column-reverse",
  //     alignItems: "start",
  //   },
  // },
}));

export default useStyles;
