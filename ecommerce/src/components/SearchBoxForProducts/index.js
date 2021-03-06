import { Box, IconButton, TextField, Typography } from "@mui/material";
import useStyles from "./style";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBoxForProducts() {
  const classes = useStyles();

  return (
    <Box style={{ width: "70%" }}>
      <Typography>جستجو</Typography>
      <Box sx={{ mt: 3 }} className={classes.searchBox}>
        <input
          sx={{ mt: 3 }}
          className={classes.inputBox}
          placeholder="دنبال چی هستی..."
        />
        <IconButton
          sx={{ mt: 2 }}
          className={classes.iconSearch}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
