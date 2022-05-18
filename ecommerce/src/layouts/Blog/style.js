import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex !important",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse !important",
    },
  },
  leftNavbarFilters: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      alignItems: "start",
    },
  },
  rightNavbarFilters: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  searchBoxProductsFilter: { width: "30px !important", color: "red" },
  iconsFilter: {
    display: "flex",
  },
  iconFilter: {
    [theme.breakpoints.down("md")]: {
      marginTop: "10px !important",
      marginBottom: "5px !important",
    },
  },
  tagFilters: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  productsMenu: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#464444",
    justifyContent: "center",
    width: "100% !important",
  },
  productItem: {
    width: "30% !important",
  },
  pagination: { display: "flex", justifyContent: "center" },
}));

export default useStyles;
