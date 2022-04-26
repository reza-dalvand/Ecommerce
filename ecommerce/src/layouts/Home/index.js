import * as React from "react";
import MainNavbar from "../../components/MainNavbar";
import Slider from "../../PlatForm/slider";
import ProductCard from "../../components/ProductCard";
import { Box } from "@mui/material";
function Home() {
  return (
    <Box>
      <MainNavbar />
      <Slider />
      <ProductCard />
    </Box>
  );
}

export default Home;
