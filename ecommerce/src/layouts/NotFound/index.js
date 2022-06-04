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
function NotFound() {
  const classes = useStyle();

  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Box display="flex" justifyContent="center">
        <Box className={classes.NotFoundBox}>
          <Typography fontSize="7rem" fontWeight="bold" color="secondary">
            404
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            صفحه مورد نظر یافت نشد!!!
          </Typography>
          <Typography sx={{ my: 3 }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
          </Typography>
          <Button
            sx={{ my: 3 }}
            color="secondary"
            className={classes.BackToHomePageBtn}
            variant="contained"
          >
            <Link color="white" href="#" underline="none">
              بازگشت به صفحه اصلی
            </Link>
          </Button>
        </Box>
      </Box>
      <MainFooter />
    </Box>
  );
}

export default NotFound;
