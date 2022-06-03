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
function Cart() {
  const classes = useStyle();

  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />

      <MainFooter />
    </Box>
  );
}

export default Cart;
