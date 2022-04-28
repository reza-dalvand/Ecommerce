import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import MainSlider from "../../PlatForm/slider";
import ProductCard from "../../components/ProductCard";
import { Box, Typography } from "@mui/material";
import useStyle from "./style";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "../../components/ProductItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
