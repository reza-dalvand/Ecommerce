import React, { useState } from "react";
import MainNavbar from "../../components/MainNavbar";
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import useStyle from "./style";
import MainFooter from "../../components/MainFooter";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import FormControl from "@mui/material/FormControl";
function CheckOut() {
  const classes = useStyle();

  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Box>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <Box sx={{ mb: 3 }} className={classes.CheckOutMainBox}>
              <Typography padding="15px" fontSize="20px">
                جزییات صورتحساب
              </Typography>
              <FormControl className={classes.checkOutForm}>
                <Box className={classes.textFieldNameAndFamily}>
                  <TextField
                    className={classes.checkOutFormName}
                    required
                    id="outlined-required"
                    label="نام"
                    defaultValue=""
                  />
                  <TextField
                    className={classes.checkOutFormName}
                    required
                    id="outlined-required"
                    label="نام خانوادگی"
                    defaultValue=""
                  />
                </Box>
                <TextField
                  sx={{ my: 3 }}
                  required
                  id="outlined-required"
                  label="نام شرکت"
                  defaultValue=""
                />
                <TextField
                  required
                  id="outlined-required"
                  label="کشور"
                  defaultValue=""
                />
                <TextField
                  sx={{ my: 3 }}
                  required
                  id="outlined-required"
                  label="شهر"
                  defaultValue=""
                />
                <Box className={classes.textFieldNameAndFamily}>
                  <TextField
                    className={classes.checkOutFormName}
                    required
                    id="outlined-required"
                    label="خیابان"
                    defaultValue=""
                  />
                  <TextField
                    className={classes.checkOutFormName}
                    required
                    id="outlined-required"
                    label="کد پستی"
                    defaultValue=""
                  />
                </Box>
                <Box sx={{ my: 3 }} className={classes.textFieldNameAndFamily}>
                  <TextField
                    required
                    className={classes.checkOutFormName}
                    id="outlined-required"
                    label="تلفن "
                    defaultValue=""
                  />
                  <TextField
                    required
                    className={classes.checkOutFormName}
                    id="outlined-required"
                    label="ایمیل "
                    defaultValue=""
                  />
                </Box>
                <TextField
                  id="outlined-multiline-flexible"
                  label="متن سفارشی"
                  multiline
                  rows={4}
                  // value={value}
                  // onChange={handleChange}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box sx={{ mt: 9 }} className={classes.CheckOutMainBoxInfoOrder}>
              <Box sx={{ mb: 1 }} display="flex" justifyContent="space-between">
                <Typography fontWeight="bold">محصولات</Typography>
                <Typography fontWeight="bold">جمع کل</Typography>
              </Box>
              <Divider />
              <Box sx={{ my: 2 }}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>پیراهن 4 عدد</Typography>
                  <Typography>18000 تومان</Typography>
                </Box>
                <Box
                  sx={{ mt: 1 }}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>پیراهن 2 عدد</Typography>
                  <Typography>12000 تومان</Typography>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ my: 2 }} display="flex" justifyContent="space-between">
                <Typography fontWeight="bold"> تخفیف</Typography>
                <Typography color="secondary">بدون کد تخفیف</Typography>
              </Box>
              <Divider />
              <Box sx={{ mt: 2 }} display="flex" justifyContent="space-between">
                <Typography fontWeight="bold">جمع کل</Typography>
                <Typography color="secondary">30000 هزار تومان</Typography>
              </Box>
              <Box width="100%">
                <Button
                  className={classes.btnConfirm}
                  sx={{ my: 5 }}
                  color="secondary"
                  variant="contained"
                >
                  ثبت سفارش
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <MainFooter />
    </Box>
  );
}

export default CheckOut;
