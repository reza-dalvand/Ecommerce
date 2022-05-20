import React from "react";
import useStyles from "./style";

import {
  Boxider,
  Avatar,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import HalfRating from "../../PlatForm/rating";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function CommentBox() {
  const classes = useStyles();
  return (
    <Box style={{ padding: 14 }} className="App">
      <Typography variant="h4" sx={{ mb: 1 }}>
        نظرات
      </Typography>
      <Box>
        <Paper style={{ padding: "40px 20px" }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <Grid justifyContent="right" item xs zeroMinWidth>
              <Typography
                variant="h5"
                style={{ marginBottom: 5, textAlign: "right" }}
              >
                محمد صالح
              </Typography>
              <Typography style={{ textAlign: "right" }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </Typography>
              <p
                style={{
                  textAlign: "right",
                  marginTop: "20px",
                  color: "green",
                }}
              >
                لحظاتی قبل
              </p>
            </Grid>
          </Grid>
        </Paper>

        <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <Grid justifyContent="right" item xs zeroMinWidth>
              <Typography
                variant="h5"
                style={{ marginBottom: 5, textAlign: "right" }}
              >
                امیر اکبری
              </Typography>
              <Typography style={{ textAlign: "right" }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </Typography>
              <p
                style={{
                  textAlign: "right",
                  marginTop: "20px",
                  color: "green",
                }}
              >
                1 دقیقه پیش
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Box>
          <Typography variant="h6">اضافه کردن نظر</Typography>
          <Box sx={{ mb: 1 }} display={"flex"}>
            <Typography>امتیاز شما:</Typography>
            <HalfRating />
          </Box>
        </Box>
        <Box className={classes.comments}>
          <FormControl
            style={{ width: "100%" }}
            sx={{ m: 1 }}
            variant="outlined"
          >
            <Box className={classes.inputs}>
              <OutlinedInput
                className={classes.input}
                id="outlined-adornment-weight"
                placeholder="نام"
              />
            </Box>
            <Box className={classes.inputs} sx={{ my: 2 }}>
              <OutlinedInput
                className={classes.input}
                id="outlined-adornment-weight"
                placeholder="ایمیل"
              />
            </Box>
            <Box className={classes.inputs}>
              <OutlinedInput
                className={classes.input}
                id="outlined-adornment-weight"
                multiline
                rows={4}
                placeholder="نظر خود را بنویسید"
              />
            </Box>
            <Button
              style={{
                height: 42,
                marginTop: 10,
                width: "70%",
                alignSelf: "center",
              }}
              variant="contained"
              color="primary"
            >
              ثبت نظر
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
