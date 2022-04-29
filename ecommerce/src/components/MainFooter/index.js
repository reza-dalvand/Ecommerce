import { Box, IconButton } from "@material-ui/core";
import * as React from "react";
import "./style.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
function MainFooter() {
  return (
    <Box className="containerFooter">
      <Box className="footerDistributed">
        <Box className="footerLeft">
          <h3>
            کیجسا<span>برند</span>
          </h3>

          <p className="footerLinks">
            <a href="#" className="link1">
              خانه
            </a>

            <a href="#">وبلاگ</a>

            <a href="#">قیمت ها</a>

            <a href="#">درباره ما</a>

            <a href="#">سوالات متداول</a>

            <a href="#">تماس با ما</a>
          </p>

          <p className="footerCompanyName">کیجسا برند © 2022</p>
        </Box>

        <Box className="footerCenter">
          <Box>
            <IconButton className="footerIcon">
              <FmdGoodIcon />
            </IconButton>
            <p>
              <span>لرستان خرم آباد مطهری پلاک 444</span>
            </p>
          </Box>

          <Box>
            <IconButton className="footerIcon">
              <PhoneIcon />
            </IconButton>
            <p>+98 990 941 2001</p>
          </Box>

          <Box>
            <IconButton className="footerIcon">
              <EmailIcon />
            </IconButton>
            <p>
              <a href="rdalvand@yahoo.com">rdalvand@yahoo.com</a>
            </p>
          </Box>
        </Box>

        <Box className="footerRight">
          <p className="footerCompanyAbout">
            <span>درباره شرکت ما</span>
            ما یه شرکت نصب و پخش انواع قطعات آسانسور با بهترین کیفیت هستیم.
            اعتماد شما سرمایه ماست.س
          </p>

          <Box className="footerIcons">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <GitHubIcon />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainFooter;
