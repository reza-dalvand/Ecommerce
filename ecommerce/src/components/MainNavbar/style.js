import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#eceaea !important",
    textAlign: "center",
    position: "relative",
  },

  searchInput: {
    display: "flex",
    justifyContent: "end",
  },
  badgeIcon: {
    color: "#514d4d",
    display: "flex",
    justifyContent: "space-between",
  },
  boxBadgeIconSearch: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      justifyContent: "end",
    },
  },
  navbarLink: {
    display: "flex",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  removeUnderLineLink: {
    textDecoration: "none",
    fontSize: "18px",
    marginLeft: 20,
    marginTop: 5,
    color: "#000",
  },
  searchBox: {
    display: "flex",
    justifyContent: "left",
    position: "absolute",
    left: 10,
    top: 70,
    zIndex: 1,
  },
  searchBoxInput: {
    height: 40,
    border: "1px solid #1565c0",
    color: "#bda4a2 !important",
  },
  searchBoxButton: { width: "30%", height: 40 },
}));

export default useStyles;
