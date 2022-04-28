import { Box } from "@material-ui/core";
import * as React from "react";

function MainFooter() {
  return (
    <Box>
      <Box>Footer Example 4</Box>
      <Box classNAme="footer-distributed">
        <Box classNAme="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

          <p classNAme="footer-links">
            <a href="#" classNAme="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p classNAme="footer-company-name">Company Name © 2015</p>
        </Box>

        <Box classNAme="footer-center">
          <Box>
            <i classNAme="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </Box>

          <Box>
            <i classNAme="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </Box>

          <Box>
            <i classNAme="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </Box>
        </Box>

        <Box classNAme="footer-right">
          <p classNAme="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <Box classNAme="footer-icons">
            <a href="#">
              <i classNAme="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i classNAme="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i classNAme="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i classNAme="fa fa-github"></i>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainFooter;
