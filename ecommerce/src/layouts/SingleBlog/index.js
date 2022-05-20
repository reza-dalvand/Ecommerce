import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import useStyle from "./style";
import MainFooter from "../../components/MainFooter";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import blogCover from "../../assets/images/blogCover.jpg";
import money1 from "../../assets/images/money1.jpg";
import money2 from "../../assets/images/money2.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CommentBox from "../../components/CommentBox";
function SingleBlog() {
  const classes = useStyle();
  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Box className={classes.containerBlog}>
        <Box style={{ width: "90%" }}>
          <Box
            className={classes.imageBlog}
            component="img"
            sx={{
              height: 500,
              width: "100%",
            }}
            alt="کاور مقاله"
            src={blogCover}
          />
          <Typography sx={{ my: 2 }} style={{ opacity: "0.7" }}>
            10 اردیبهشت 1402 ساعت 12:15
          </Typography>
          <Typography style={{ fontWeight: 600 }} variant="h5" sx={{ my: 2 }}>
            میانگین درآمد کارمندان بانک در سال 1402 گزارش بانک مرکزی
          </Typography>
          <Typography sx={{ my: 2 }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
          <Box className={classes.imagesInBlog}>
            <Box
              className={classes.img}
              component="img"
              sx={{
                my: 2,
              }}
              alt="عکس"
              src={money1}
            />
            <Box
              className={classes.img}
              component="img"
              sx={{
                my: 2,
              }}
              alt="عکس"
              src={money2}
            />
          </Box>
          <Typography sx={{ my: 2 }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          </Typography>
          <Box style={{ display: "flex" }}>
            <Typography style={{ fontWeight: 600 }} sx={{ my: 2 }}>
              اشتراک گذاری :
            </Typography>
            <Box className={classes.shareBlog} sx={{ my: 2, ml: 1 }}>
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
          <Divider />
          <Box sx={{ my: 4 }}>
            <CommentBox />
          </Box>
        </Box>
      </Box>
      <MainFooter />
    </Box>
  );
}

export default SingleBlog;
