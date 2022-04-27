import * as React from "react";
import { Box, IconButton, Rating, Typography } from "@mui/material";
import "./index.css";
import shirt from "../../assets/images/shirt.png";
import headphone from "../../assets/images/headphone.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HalfRating from "../../PlatForm/rating";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const ProductItem = () => {
  const { useState } = React;
  const [addcart, setaddcart] = useState(1);
  const [heart, setheart] = useState(true);

  const AddCart = () => {
    if (addcart < 10) {
      setaddcart(addcart + 1);
    }
  };
  const DecBag = () => {
    if (addcart >= 1) {
      setaddcart(addcart - 1);
    }
  };

  const Heart = () => {
    if (heart) {
      setheart(false);
    } else {
      setheart(true);
    }
  };

  return (
    <>
      <Box className="container">
        <Box className="card">
          <i className="fa fa-long-arrow-left"></i>
          <Box className="image">
            <Box component="img" src={headphone} />
          </Box>
          <Box className="text">
            <Box className="positionHeart">
              <h5>تیشرت</h5>
              <Box className="heart">
                <IconButton
                  color="error"
                  aria-label="upload picture"
                  component="span"
                  onClick={Heart}
                >
                  {heart ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </IconButton>
              </Box>
            </Box>
            <h3>ساخت ایران</h3>
            <Box className="rating_reviews">
              <HalfRating />
              <Typography>4.7</Typography>
              <Typography>32 بازدید</Typography>
            </Box>
            <Box className="quantity_gram">
              <span>250g</span>
              <span>500g</span>
              <span>1000g</span>
            </Box>
            <Box className="price">
              <h3>15.90 IR </h3>
              <Box className="qty">
                <IconButton
                  style={{ color: "#3cd211" }}
                  aria-label="upload picture"
                  component="span"
                  onClick={AddCart}
                >
                  <AddCircleOutlineIcon />
                </IconButton>

                <Typography>{addcart}</Typography>
                <IconButton
                  style={{ color: "#f70e0e" }}
                  aria-label="upload picture"
                  component="span"
                  onClick={DecBag}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </Box>
            </Box>
            <Box className="description">
              <h5>توضیحات</h5>
              <Typography>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                است...
              </Typography>
            </Box>
            <Box className="last_section">
              <button sx={{ ml: 1 }} onClick={AddCart}>
                خرید کالا
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ProductItem;
