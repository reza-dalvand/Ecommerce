import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    hambergerMenu: {
      display: "none !important",
  
      [theme.breakpoints.down("md")]: {
        display: "flex !important",
        marginLeft: "5px !important",
      },
    },
  }));

  export default useStyles;