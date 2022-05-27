import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import useStyle from "./style";
import MainFooter from "../../components/MainFooter";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import Map from "../../components/googleMap";
import PublicIcon from "@mui/icons-material/Public";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
function ContactUs() {
  const classes = useStyle();
  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Box sx={{ padding: 1 }}>
        <Grid className={classes.MainBox} container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.infoMain}>
              <Box sx={{ mt: 3 }} className={classes.container}>
                <Box className={classes.infoBoxItem}>
                  <Box className={classes.circleIconInfo}>
                    <LocalPhoneIcon />
                  </Box>
                  <Box>
                    <Typography className={classes.textInfo}>
                      9909412001 98+
                    </Typography>
                    <Typography className={classes.textInfo}>
                      9355628498 98+
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 2 }} className={classes.container}>
                <Box className={classes.infoBoxItem}>
                  <Box className={classes.circleIconInfo}>
                    <PublicIcon />
                  </Box>
                  <Box width='75%'>
                    <Link
                      className={classes.emailLink}
                      underline="none"
                      href="#"
                    >
                      rdalvand@yahoo.com
                    </Link>
                    <Link
                      className={classes.emailLink}
                      underline="none"
                      href="#"
                    >
                      rdalvand@gmail.com
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 2 }} className={classes.container}>
                <Box className={classes.circleIconInfo}>
                  <LocationOnIcon />
                </Box>
                <Box width="75%">
                  <Typography className={classes.textInfo}>
                    لرستان خرم آباد ابتدای خیابان بزرگمهر شمالی نبش کوچه مخابرات
                  </Typography>
                  {/* <Typography className={classes.textInfo}>
                    لرستان خرم آباد جنب شهدا
                  </Typography> */}
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                sx={{ mt: 10 }}
              >
                <Typography variant="h5">Follow Us</Typography>
                <Box className={classes.shareBlog} sx={{ my: 2 }}>
                  <Link sx={{ ml: 2 }} href="#">
                    <WhatsAppIcon />
                  </Link>
                  <Link sx={{ ml: 2 }} href="#">
                    <InstagramIcon />
                  </Link>
                  <Link sx={{ ml: 2 }} href="#">
                    <TelegramIcon />
                  </Link>
                  <Link sx={{ ml: 2 }} href="#">
                    <LinkedInIcon />
                  </Link>
                  <Link sx={{ ml: 2 }} href="#">
                    <LinkedInIcon />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box className={classes.containerSendTicket}>
              <Typography variant="h5">ارسال تیکت</Typography>
              <FormControl
                style={{ width: "95%" }}
                sx={{ m: 1 }}
                variant="outlined"
              >
                <Box className={classes.nameAndEmailField}>
                  <OutlinedInput
                    sx={{ mt: 2 }}
                    className={classes.inputText}
                    id="outlined-adornment-weight"
                    placeholder="نام *"
                  />
                  <OutlinedInput
                    className={classes.inputText}
                    sx={{ mt: 2 }}
                    id="outlined-adornment-weight"
                    placeholder="ایمیل *"
                  />
                </Box>
                <OutlinedInput
                  sx={{ mt: 2 }}
                  id="outlined-adornment-weight"
                  placeholder="موضوع *"
                />
                <OutlinedInput
                  sx={{ mt: 2 }}
                  multiline
                  rows={4}
                  id="outlined-adornment-weight"
                  placeholder="متن پیام *"
                />
                <Button
                  className={classes.CommentButton}
                  style={{
                    height: 45,
                    marginTop: 30,
                    alignSelf: "center  ",
                    width: "100px",
                  }}
                  variant="contained"
                  color="primary"
                >
                  ثبت پیام
                </Button>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <MainFooter />
    </Box>
  );
}

export default ContactUs;
