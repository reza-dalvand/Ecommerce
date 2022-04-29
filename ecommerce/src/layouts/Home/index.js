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
import head2 from "../../assets/images/head2.jpg";
import head3 from "../../assets/images/head3.jpg";
import head8 from "../../assets/images/head8.jpg";
import head5 from "../../assets/images/head5.jpg";
import head6 from "../../assets/images/head6.jpg";
import head7 from "../../assets/images/head7.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToScroll: 3,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
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
      <Box sx={{ m: 6 }} className={classes.slickCarousel}>
        <Slider {...settings}>
          <Box>
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
              }}
              alt="head2"
              src={head2}
            />{" "}
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
              }}
              alt="head2"
              src={head3}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
              }}
              alt="head2"
              src={head5}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
              }}
              alt="head2"
              src={head6}
            />{" "}
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
              }}
              alt="head2"
              src={head7}
            />{" "}
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
              }}
              alt="head2"
              src={head8}
            />{" "}
          </Box>
        </Slider>
      </Box>
      <MainFooter />
    </Box>
  );
}

export default Home;
