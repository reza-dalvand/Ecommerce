import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px",
    width: "45%",
    marginBlock: "2rem",
    gap: "2rem",
  },
  img: {
    maxWidth: "100%",
    display: "block",
    objectFit: "cover",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "clamp(20rem, calc(20rem + 2vw), 22rem)",
    overflow: "hidden",
    boxShadow: "0 0.1rem 1rem rgba(0, 0, 0, 0.1)",
    borderRadius: "1em",
    background: "#ece9e6",
    background: "linear-gradient(to top, #f0da99, #ece9e6);",
    cursor: "pointer",
    height: "fit-content",
    padding: 8,
  },
  cardBody: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  tag: {
    alignSelf: "flex-start",
    padding: "0.25em 0.75em",
    borderRadius: "1em",
    fontSize: "0.75rem",
  },
  tag: {
    "& +  tag": {
      marginLeft: "0.5em",
    },
  },
  tagBlue: {
    background: "#56ccf2",
    background: "linear-gradient(to bottom, #2f80ed, #56ccf2)",
    color: "#fafafa",
    borderRadius: 15,
    padding: 5,
  },
  tagBrown: {
    background: "#56ccf2",
    background: "linear-gradient(to bottom, #ffd194, #d1913c)",
    color: "#fafafa",
  },
  tagRed: {
    background: "#56ccf2",
    background: "linear-gradient(to bottom, #ef473a, #cb2d3e)",
    color: "#fafafa",
  },

  cardBody: {
    "& > h4": {
      marginLeft: "0.5em",
      fontSize: "1.5rem",
      textTransform: "capitalize",
    },
  },

  cardFooter: {
    padding: "1rem",
    marginTop: "auto",
  },

  user: {
    display: "flex",
    gap: "0.5rem",
  },
  image: {
    width: "100%",
  },

  userImage: {
    borderRadius: "50%",
  },

  user__info: {
    "& > small": {
      color: "#666",
    },
  },
}));

export default useStyles;
