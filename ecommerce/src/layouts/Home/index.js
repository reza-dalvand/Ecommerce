import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import MainSlider from "../../PlatForm/slider";
import ProductCard from "../../components/ProductCard";
import { Box, IconButton, Typography } from "@mui/material";
import useStyle from "./style";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "../../components/ProductItem";
import MainFooter from "../../components/MainFooter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Home() {
  const classes = useStyle();
  const [showNewProdcuts, setShowNew] = useState(true);
  const [showBestProducts, setShowBest] = useState(false);

  const showNewProductHandler = () => {
    setShowNew(true);
    setShowBest(false);
  };
  const showBestProductHandler = () => {
    setShowNew(false);
    setShowBest(true);
  };

  return (
    <Box>
      <MainNavbar />
      <MainSlider />
      <Box sx={{ mt: 5 }}>
        <Typography className={classes.categoryTitle}>دسته بندی ها</Typography>
        <Box className={classes.category}>
          <ProductCard className={classes.categoryItem} />
          <ProductCard className={classes.categoryItem} />
          <ProductCard className={classes.categoryItem} />
          <ProductCard className={classes.categoryItem} />
        </Box>
        <Box sx={{ mt: 5 }} className={classes.containerProducts}>
          <Typography
            onClick={showNewProductHandler}
            className={classes.productTitle}
            sx={{ ml: 5 }}
          >
            محصولات جدید
          </Typography>
          <Typography
            onClick={showBestProductHandler}
            className={classes.productTitle}
            sx={{ ml: 2 }}
          >
            بهترین محصولات
          </Typography>
        </Box>
        {showNewProdcuts && (
          <Box sx={{ mt: 4 }} className={classes.productsMenu}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <Typography
              style={{ width: "100%" }}
              className={classes.moreProducts}
            >
              بیشتر نمایش بده...
            </Typography>

            <KeyboardArrowDownIcon style={{ color: "#f2ab05" }} />
          </Box>
        )}

        {showBestProducts && (
          <Box sx={{ mt: 4 }} className={classes.productsMenu}>
            ناموجود میباشد... ناموجود میباشد... ناموجود میباشد... ناموجود
            میباشد... ناموجود میباشد... ناموجود میباشد...
            <Typography
              style={{ width: "100%" }}
              className={classes.moreProducts}
            >
              بیشتر نمایش بده...
            </Typography>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      <MainFooter />
    </Box>
  );
}

export default Home;
