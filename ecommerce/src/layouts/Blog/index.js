import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import useStyle from "./style";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "../../components/ProductItem";
import MainFooter from "../../components/MainFooter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import BlogItem from "../../components/blogCard";

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
function Blog() {
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
            <Grid item>
              <Box sx={{ mt: 4, mb: 4 }} className={classes.productsMenu}>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />

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

export default Blog;
