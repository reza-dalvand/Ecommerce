import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import MainSlider from "../../PlatForm/slider";
import ProductCard from "../../components/ProductCard";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import useStyle from "./style";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "../../components/ProductItem";
import MainFooter from "../../components/MainFooter";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Products() {
  const classes = useStyle();

  return (
    <Box>
      <MainNavbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
      <MainFooter />
    </Box>
  );
}

export default Products;
