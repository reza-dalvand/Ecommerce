import * as React from "react";
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
  return (
    <Box>
      <MainNavbar />
      <Slider />
      <Box>
        {/* <Typography variant="h2">پر بادیترین محصولات</Typography> */}
        {/* <Carousel responsive={responsive} swipeable={false}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Carousel> */}
        <Box sx={{ mt: 5 }} className={classes.containerProducts}>
          <Typography
            className={classes.productTitle}
            sx={{ mr: 2 }}
            variant="h6"
          >
            محصولات جدید
          </Typography>
          <Typography
            className={classes.productTitle}
            sx={{ mr: 2 }}
            variant="h6"
          >
            بهترین محصولات{" "}
          </Typography>
          <Typography
            className={classes.productTitle}
            sx={{ mr: 2 }}
            variant="h6"
          >
            {" "}
            محصولات موجود
          </Typography>
        </Box>
        {/* <ProductItem /> */}
      </Box>
    </Box>
  );
}

export default Home;
