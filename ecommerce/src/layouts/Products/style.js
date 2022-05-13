import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex !important",
    alignItems: "flex-start",
  },
  leftNavbarFilters: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightNavbarFilters: {
    display: "flex",
    flexDirection: "column",
  },
  searchBoxProductsFilter: { width: "30px !important", color: "red" },
  iconsFilter: { display: "flex" },
  tagFilters: { display: "flex", flexWrap: "wrap", width: "80%" },
}));

export default useStyles;
