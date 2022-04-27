import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  containerProducts: {
    display: "flex",
  },
  productTitle: {
    cursor: "pointer !important",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
