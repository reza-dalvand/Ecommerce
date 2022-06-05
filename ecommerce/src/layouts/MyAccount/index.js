import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import useStyle from "./style";
import MainFooter from "../../components/MainFooter";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import SimpleAccordion from "../../components/Accordion";
function MyAccount() {
  const classes = useStyle();
  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Box className={classes.accordion}>
        <SimpleAccordion />
      </Box>

      <MainFooter />
    </Box>
  );
}

export default MyAccount;
