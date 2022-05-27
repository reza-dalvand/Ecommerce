import React, { useState } from "react";
import MainNavbar from "../../../components/MainNavbar";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import useStyle from "./style";
import MainFooter from "../../../components/MainFooter";
import BasicBreadcrumbs from "../../../components/Breadcrumbs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function LoginAndRegister() {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <MainNavbar />
      <BasicBreadcrumbs />
      <Box sx={{ width: "100%" }}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label=" ورود" {...a11yProps(0)} />
            <Tab label="ثبت نام" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box sx={{ my: 5 }} className={classes.mainBox}>
            <Box className={classes.inputFields}>
              <FormControl>
                <OutlinedInput
                  className={classes.inputText}
                  sx={{ mt: 2 }}
                  id="outlined-adornment-weight"
                  placeholder="نام کاربری *"
                />
                <OutlinedInput
                  sx={{ mt: 2 }}
                  id="outlined-adornment-weight"
                  placeholder="رمز عبور *"
                />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 2 }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="به خاطر بسپار"
                  />
                  <Link underline="none" href="#">
                    فراموشی رمز عبور؟
                  </Link>
                </Box>
                <Button
                  className={classes.CommentButton}
                  style={{
                    height: 45,
                    marginTop: 30,
                    alignSelf: "right  ",
                    width: "100px",
                  }}
                  variant="contained"
                  color="primary"
                >
                  ورود
                </Button>
              </FormControl>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ my: 5 }} className={classes.mainBox}>
            <Box className={classes.inputFields}>
              <FormControl width="100%">
                <OutlinedInput
                  className={classes.inputText}
                  sx={{ mt: 2 }}
                  id="outlined-adornment-weight"
                  placeholder="نام کاربری *"
                />
                <OutlinedInput
                  className={classes.inputText}
                  sx={{ mt: 2 }}
                  id="outlined-adornment-weight"
                  placeholder="ایمیل  *"
                />
                <OutlinedInput
                  sx={{ mt: 2 }}
                  id="outlined-adornment-weight"
                  placeholder="رمز عبور *"
                />
                <Button
                  className={classes.CommentButton}
                  style={{
                    height: 45,
                    marginTop: 30,
                    alignSelf: "right  ",
                    width: "100px",
                  }}
                  variant="contained"
                  color="primary"
                >
                  ثبت نام
                </Button>
              </FormControl>
            </Box>
          </Box>
        </TabPanel>
      </Box>

      <MainFooter />
    </Box>
  );
}

export default LoginAndRegister;
