import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import Slider from "../../PlatForm/slider";
import ProductCard from "../../components/ProductCard";
import { Box, Typography } from "@mui/material";
import useStyle from "./style";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "../../components/ProductItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
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
      <Slider />
      <Box sx={{ mt: 5 }}>
        <Typography className={classes.categoryTitle}>دسته بندی ها</Typography>

        <Carousel responsive={responsive} swipeable={false}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Carousel>
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
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Home;
