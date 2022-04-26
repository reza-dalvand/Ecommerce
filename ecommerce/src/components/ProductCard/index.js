import styles from "./style.module.css";
import * as React from "react";
import { Typography, Box, Link } from "@material-ui/core";

function ProductCard() {
  return (
    <Box className={styles.body}>
      <Box className={styles.container}>
        <Box className={styles.card}>
          <Box className={styles.imgBx}>
            <Box
              component="img"
              src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
              alt="nike-air-shoe"
            />
          </Box>

          <Box className={styles.contentBx}>
            <h2>کتونی نایک</h2>

            <Box className={styles.size}>
              <Typography variant="h3">اندازه: </Typography>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </Box>

            <Box className={styles.color}>
              <Typography variant="h3">رنگ: </Typography>
              <span></span>
              <span></span>
              <span></span>
            </Box>
            <Link href="#">خرید کالا</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
