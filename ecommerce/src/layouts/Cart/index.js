import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import useStyle from "./style";
import MainFooter from "../../components/MainFooter";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import CustomizedTables from "../../components/TabelCart";
import { ConstructionSharp, Label } from "@mui/icons-material";

function Cart() {
  const classes = useStyle();

  const [values, setValues] = useState();

  const handleChange = () => {};

  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Grid container>
        <Grid item xs={12} padding="15px">
          <CustomizedTables />
          <Box className={classes.ButtonsClearAndContinue}>
            <Button
              className={classes.ButtonsClearAndContinueItem}
              variant="contained"
              color="success"
            >
              ادامه خرید
            </Button>
            <Button
              color="error"
              className={classes.ButtonsClearAndContinueItem}
              variant="contained"
            >
              پاک کردن سبد خرید
            </Button>
          </Box>
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={12} sm={6}>
          <Box sx={{ my: 3 }} className={classes.couponCode}>
            <Typography variant="h5">کد تخفیف</Typography>
            <Typography>اگر کد تخفیف دارید وارد کنید؟</Typography>
            <OutlinedInput id="outlined-adornment-weight" />
            <Button
              color="secondary"
              className={classes.ButtonsClearAndContinueItem}
              variant="contained"
            >
              اعمال تخفیف
            </Button>
          </Box>
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={12} sm={6}>
          <Box sx={{ my: 3 }} className={classes.couponCode}>
            <Typography variant="h5" fontSize="22px">
              جمع کل
            </Typography>

            <Box display="flex" justifyContent="space-between">
              <Typography>قیمت کل محصولات </Typography>
              <Typography>198000 تومان</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">قیمت کل با تخفیف</Typography>
              <Typography color="secondary" variant="h6">
                198000 تومان
              </Typography>
            </Box>

            <Button
              color="secondary"
              className={classes.ButtonsClearAndContinueItem}
              variant="contained"
            >
              فرم پرداخت
            </Button>
          </Box>
        </Grid>
      </Grid>
      <MainFooter />
    </Box>
  );
}

export default Cart;
