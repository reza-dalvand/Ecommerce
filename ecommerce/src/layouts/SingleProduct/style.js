import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  containerImage: {
    background: "#EEE6E6",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    padding: "5%",
    width: "95%",
  },
  tagImage: {
    background: "blue",
    height: 35,
    width: "fit-contant",
    backgroundColor: "#FA6BFF",
    color: "white",
    padding: "2%",
    display: "flex",
    justifyContent: "center",
    borderRadius: 15,
    [theme.breakpoints.up("md")]: {
      padding: 7,
    },
  },
  price: { display: "flex" },
  offPrice: { color: "#fe5252" },
  realPrice: { textDecoration: "line-through" },
}));

export default useStyles;
