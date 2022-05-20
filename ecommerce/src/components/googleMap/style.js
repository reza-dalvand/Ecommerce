import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  comments: { width: "100%" },
  inputs: { width: "100%", maxWidth: "100% !important" },
  input: { width: "100%" },
  addComment: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  inputMid: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    maxWidth: "100% !important",
  },
  CommentButton: {
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
}));

export default useStyles;
