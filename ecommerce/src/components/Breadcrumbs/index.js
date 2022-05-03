import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import useStyles from "./style";
import { Box } from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  const classes = useStyles();

  return (
    <Box
      className={classes.breadcrumbs}
      role="presentation"
      onClick={handleClick}
      sx={{ mt: 5, mb: 5 }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          className={classes.breadcrumbsLink}
          underline="hover"
          color="inherit"
          href="/"
        >
          خانه
        </Link>
        <Link
          className={classes.breadcrumbsLink}
          underline="hover"
          color="text.primary"
          href="/material-ui/getting-started/installation/"
        >
          محصولات
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
