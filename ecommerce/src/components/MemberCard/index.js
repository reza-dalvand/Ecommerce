import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import m1 from "../../assets/images/m1.jpg";
import m2 from "../../assets/images/m2.jpg";
import m3 from "../../assets/images/m3.jpg";
import m4 from "../../assets/images/m4.jpg";
import m5 from "../../assets/images/m5.jpg";
import m6 from "../../assets/images/m6.jpg";
import useStyle from "./style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "@mui/material";
export default function MemberCard() {
  const classes = useStyle();

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.img} component="img" src={m2} />
      <Typography className={classes.memberInfo} fontWeight="bold" variant="h5">
        محمد صالحی
      </Typography>
      <Typography
        className={classes.memberInfo}
        color="#B256CC"
        fontSize="18px"
      >
        توسعه دهنده
      </Typography>
      <Typography>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </Typography>
      <Box sx={{ my: 2 }} display="flex" justifyContent="center">
        <Link sx={{ mx: 1 }} href="#">
          <InstagramIcon />
        </Link>
        <Link sx={{ mx: 1 }} href="#">
          <TelegramIcon />
        </Link>
        <Link sx={{ mx: 1 }} href="#">
          <WhatsAppIcon />
        </Link>
        <Link sx={{ mx: 1 }} href="#">
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
}
