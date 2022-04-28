import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  containerProducts: {
    display: "flex",
  },
  categoryTitle: {
    fontWeight: "600 !important",
    fontSize: "28px !important",
    textAlign: "center",
  },
  productTitle: {
    cursor: "pointer !important",
    fontWeight: "600 !important",
    fontSize: "18px !important",
    "&:hover": {
      borderBottom: "3px solid black",
      color: "#a749ff",
    },
  },
  moreProducts: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "18px !important",
    color: "#ead106",
    "&:hover": {
      color: "#b38720",
    },
  },
  productsMenu: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#464444",
    justifyContent: "center",
  },
}));

export default useStyles;
