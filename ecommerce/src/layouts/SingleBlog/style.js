import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  containerBlog: {
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
    width: "100%",
  },
  imageBlog: {
    display: "flex",
    justifyContent: "center",
  },
  imagesInBlog: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  img: {
    height: 300,
    width: "48%",
    [theme.breakpoints.down("xs")]: {
      height: 300,
      width: "100%",
    },
  },
  shareBlog: {
    display: "flex",
    width: "10%",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      width: "25%",

    },
  },
}));

export default useStyles;
