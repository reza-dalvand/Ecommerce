import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    width: "285px",
    height: "520px",
    background: "#dfd7d7",
    padding: "15px",
    borderRadius: "6%",
    boxShadow: "0 0.1rem 1rem rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "2%",
  },
  img: {
    width: "150px",
    height: "150px",
    border: "8px solid #A084DB",
    borderRadius: "50%",
  },
  memberInfo: {
    margin: "5%",
  },
}));

export default useStyles;
