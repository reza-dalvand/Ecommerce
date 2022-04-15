import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainFormControl: {
    display: "flex",
    justifyContent: "center",
    height: 100,
  },
  formControlTitle: { fontWeight: 500 },
  hamberMenuSelectItem: {
    color: "black",

    "&:hover": {
      backgroundColor: "#1976d2 !important",
      color: "white !important",
    },
  },
}));

export default useStyles;
