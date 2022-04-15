import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainFormControl: {
    display: "flex",
    justifyContent: "center",
    height: 100,
  },
  formControlTitle: { fontWeight: 500 },
  menuItem: {
    background: "#f1f1f1",
    "&:hover": {
      background: "#f00",
    },
  },
}));

export default useStyles;
