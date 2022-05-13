import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
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
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import CustomSelectBox from "../../components/CustomSelectBox";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewListIcon from "@mui/icons-material/ViewList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ProductTags from "../../components/ProductTags";
import SearchBoxForProducts from "../../components/SearchBoxForProducts";
import PaginationOutlined from "../../components/Pagination";

function CheckboxLabels(label) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="همه دسته بندی ها"
      />
    </FormGroup>
  );
}
function Products() {
  const classes = useStyle();

  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Box sx={{ mx: 6 }}>
        <Grid className={classes.mainContainer} container spacing={3}>
          <Grid style={{ width: "100%" }} item xs={12} lg={3}>
            <Box sx={{ mt: 3 }} className={classes.rightNavbarFilters}>
              <SearchBoxForProducts />
            </Box>
            <Box className={classes.checkBoxFilters}>
              <Typography sx={{ ml: 1, mt: 3 }}>دسته بندی ها</Typography>

              <CheckboxLabels />
              <CheckboxLabels />
              <CheckboxLabels />
              <CheckboxLabels />
              <CheckboxLabels />
            </Box>
            <Box className={classes.checkBoxFilters}>
              <Typography sx={{ ml: 1, mt: 3 }}>دسته بندی ها</Typography>

              <CheckboxLabels />
              <CheckboxLabels />
              <CheckboxLabels />
              <CheckboxLabels />
              <CheckboxLabels />
            </Box>
            <Typography sx={{ ml: 1, mt: 3 }}>دسته بندی ها</Typography>

            <Box className={classes.tagFilters}>
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
              <ProductTags />
            </Box>
          </Grid>
          <Grid style={{ width: "100%" }} item xs={12} lg={9}>
            <Box sx={{ mt: 2 }} className={classes.leftNavbarFilters}>
              <Box className={classes.iconsFilter}>
                <IconButton aria-label="upload picture" component="span">
                  <ViewComfyIcon />
                </IconButton>
                <IconButton aria-label="upload picture" component="span">
                  <ViewListIcon />
                </IconButton>
              </Box>
              <Typography className={classes.iconFilter}>
                نمایش 15 از 144 کالا
              </Typography>
              <CustomSelectBox />
            </Box>
            <Grid item>
              <Box sx={{ mt: 4, mb: 4 }} className={classes.productsMenu}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </Box>
              <Box sx={{ m: 3 }} className={classes.pagination}>
                <PaginationOutlined />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <MainFooter />
    </Box>
  );
}

export default Products;
