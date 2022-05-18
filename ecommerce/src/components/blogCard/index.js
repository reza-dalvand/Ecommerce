import * as React from "react";
import { Box, IconButton, Rating, Typography } from "@mui/material";
import "./index.css";
import image_blog from "../../assets/images/image_blog.jpg";
import useStyles from "./style";

const BlogItem = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.card}>
        <Box className="card__header">
          <img
            src={image_blog}
            alt="card__image"
            className={classes.image}
            width="600"
          />
        </Box>
        <Box className={classes.cardBody}>
          <span className={classes.tagBlue}>طبیعت</span>
          <h4>بهترین مناظر طبیعی 2022</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            چاپگرها و متون بلکه روزنامه و مجله در
          </p>
        </Box>
        <Box className={classes.cardFooter}>
          <Box className={classes.user}>
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className={classes.userImage}
            />
            <Box className={classes.userInfo}>
              <h5>علی راستی</h5>
              <small>2 ساعت پیش</small>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BlogItem;
