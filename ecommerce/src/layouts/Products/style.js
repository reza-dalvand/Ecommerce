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
  iconsFilter: { display: "flex" },
}));

export default useStyles;
