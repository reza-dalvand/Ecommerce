import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import CountUp from "react-countup";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import about4 from "../../assets/images/about4.png";
import about5 from "../../assets/images/about5.png";
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
import NeshanMap from "../../components/NeshanMap";
import PublicIcon from "@mui/icons-material/Public";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MemberCard from "../../components/MemberCard";
import Slider from "react-slick";
function AboutUs() {
  const classes = useStyle();
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
      <BasicBreadcrumbs />
      <Box className={classes.mainContainer}>
        <Box className={classes.headerTexts}>
          <Typography sx={{ my: 1 }} style={{ color: "#666" }} variant="h5">
            ما کی هستیم
          </Typography>
          <Typography sx={{ mb: 2 }} fontSize="36px" fontWeight="500">
            به کیجسا خوش آمدید
          </Typography>
          <Typography variant="h6" className={classes.description}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            می طلبد
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ my: 7 }}
        >
          {/* <Slider {...settings}> */}
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          {/* </Slider> */}
        </Box>
      </Box>
      <Box sx={{ my: 10 }} className={classes.infoBox}>
        <Box>
          <Typography variant="h4">کار ما</Typography>
          <Typography variant="h6" className={classes.infoBoxItem}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">هدف ما</Typography>
          <Typography variant="h6" className={classes.infoBoxItem}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">محصولات ما</Typography>
          <Typography variant="h6" className={classes.infoBoxItem}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده
          </Typography>
        </Box>
      </Box>
      <Box sx={{ my: 10 }} className={classes.countUpBox}>
        <Box sx={{ my: 3 }} className={classes.countUpBoxItem}>
          <BusinessCenterIcon fontSize="large" />
          <Typography
            fontSize="40px"
            color="#A749FF"
            variant="h6"
            fontWeight="bold"
          >
            <CountUp end={500} />
          </Typography>
          <Typography variant="h5">پروژه های موفق</Typography>
        </Box>
        <Box sx={{ my: 3 }} className={classes.countUpBoxItem}>
          <EmojiEventsIcon fontSize="large" />
          <Typography
            fontSize="40px"
            color="#A749FF"
            variant="h6"
            fontWeight="bold"
          >
            <CountUp end={415} />
          </Typography>
          <Typography variant="h5">دستاورد های ما</Typography>
        </Box>
        <Box sx={{ my: 3 }} className={classes.countUpBoxItem}>
          <LightbulbIcon fontSize="large" />
          <Typography
            variant="h6"
            fontSize="40px"
            color="#A749FF"
            fontWeight="bold"
          >
            <CountUp end={210} />
          </Typography>
          <Typography variant="h5">برند سازی </Typography>
        </Box>
        <Box sx={{ my: 3 }} className={classes.countUpBoxItem}>
          <EmojiEmotionsIcon fontSize="large" />
          <Typography
            fontSize="40px"
            color="#A749FF"
            variant="h6"
            fontWeight="bold"
          >
            <CountUp end={359} />
          </Typography>
          <Typography variant="h5">رضایت مشتری</Typography>
        </Box>
      </Box>
      <Box sx={{ my: 10 }}>
        <Slider {...settings}>
          <Box>
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="head2"
              src={about1}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="head2"
              src={about2}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="head2"
              src={about3}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="head2"
              src={about4}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="head2"
              src={about5}
            />
          </Box>
        </Slider>
      </Box>

      <MainFooter />
    </Box>
  );
}

export default AboutUs;
