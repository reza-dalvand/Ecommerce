import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import useStyle from "./style";
import "react-multi-carousel/lib/styles.css";
import MainFooter from "../../components/MainFooter";
import fation2 from "../../assets/images/fation2.png";
import ModalImage from "react-modal-image";
import StandardImageList from "../../components/StandardImageList";
import Divider from "@mui/material/Divider";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import HalfRating from "../../PlatForm/rating";
import ColorPicker from "../../components/ColorPicker";
import SizePicker from "../../components/SizePicker";
import GroupedButtons from "../../components/GroupedButtons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "@mui/material/Link";
import BasicTabs from "../../components/Tabs";
import head2 from "../../assets/images/head2.jpg";
import head3 from "../../assets/images/head3.jpg";
import head8 from "../../assets/images/head8.jpg";
import head5 from "../../assets/images/head5.jpg";
import head6 from "../../assets/images/head6.jpg";
import head7 from "../../assets/images/head7.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SingleProduct() {
  const classes = useStyle();
  const [heart, setHeart] = useState(false);
  const heartHandler = () => {
    setHeart(!heart);
  };
  const settings = {
    // className: "center",
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
      <BasicBreadcrumbs />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box>
            <Box className={classes.containerImage}>
              <Box className={classes.tagImage}>15% تخفیف</Box>
              <ModalImage
                className={classes.image}
                showRotate={true}
                small={fation2}
                medium={fation2}
                alt="عکس محصول"
              />
            </Box>
            <Box>
              <StandardImageList />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ ml: 1, mt: 1 }}>
            <Typography variant="h4">نام محصول</Typography>
            <Box sx={{ mt: 1 }} className={classes.price}>
              <Typography className={classes.offPrice} variant="h5">
                15000 ریال
              </Typography>
              <Typography
                className={classes.realPrice}
                sx={{ ml: 2 }}
                variant="h6"
              >
                18000 ریال
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <HalfRating />
              <Typography padding={1} sx={{ mt: 2 }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آیند
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box>
              <Typography sx={{ mb: 1 }}>انتخاب رنگ</Typography>
              <ColorPicker />
            </Box>
            <Box
              style={{ display: "flex", alignItems: "center" }}
              sx={{ mt: 2 }}
            >
              <Typography sx={{ mb: 1 }}>انتخاب سایز : </Typography>

              <SizePicker />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
              sx={{ my: 2 }}
            >
              <GroupedButtons />
              <Button
                // sx={{ ml: 2 }}
                style={{ height: 42 }}
                variant="contained"
                color="secondary"
                startIcon={<AddShoppingCartIcon />}
              >
                خرید محصول
              </Button>
              <IconButton color="error" onClick={heartHandler}>
                {heart ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Box
                sx={{ mt: 5 }}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "85%",
                }}
              >
                <Link href="#">
                  <FacebookIcon />
                </Link>
                <Link href="#">
                  <WhatsAppIcon />
                </Link>
                <Link href="#">
                  <InstagramIcon />
                </Link>
                <Link href="#">
                  <TelegramIcon />
                </Link>
                <Link href="#">
                  <LinkedInIcon />
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box marginTop={4}>
            <BasicTabs />
            <Divider sx={{ my: 3 }} />
          </Box>
        </Grid>
      </Grid>

      <Typography
        sx={{ mt: 3 }}
        style={{ display: "flex", justifyContent: "center" }}
        variant="h5"
      >
        محصولات مرتبط
      </Typography>
      <Box sx={{ m: 1, mt: 3, mb: 4 }} className={classes.slickCarousel}>
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
              src={head7}
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
              src={head8}
            />
          </Box>
        </Slider>
      </Box>
      <MainFooter />
    </Box>
  );
}

export default SingleProduct;
