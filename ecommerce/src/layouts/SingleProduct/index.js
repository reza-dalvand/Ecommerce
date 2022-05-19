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
function SingleProduct() {
  const classes = useStyle();
  const [heart, setHeart] = useState(false);
  const heartHandler = () => {
    setHeart(!heart);
  };

  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Grid container>
        <Grid item xs={12}>
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
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <StandardImageList />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ ml: 1 }}>
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
              <Typography sx={{ mt: 2 }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آیند
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box>
              <Typography>انتخاب رنگ</Typography>
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
              sx={{ mr: 5 }}
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
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
        </Grid>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>

      <MainFooter />
    </Box>
  );
}

export default SingleProduct;
