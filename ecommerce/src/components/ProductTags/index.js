import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Box, Typography } from "@mui/material";
import useStyles from "./style";

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ProductTags() {
  const classes = useStyles();

  return (
    <Box sx={{ m: 1 }} className={classes.mainBox}>
      <Typography>فشن</Typography>
    </Box>
  );
}
