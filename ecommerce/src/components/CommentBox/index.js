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
      <Typography variant={"h4"}>نظرات</Typography>
      <Grid>
        <Box sx={{ mt: 3 }} className={classes.mainContainer}>
          <Grid item xs={12} md={5}>
            <Box>
              <Paper style={{ padding: "40px 20px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar alt="Remy Sharp" src={imgLink} />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography
                      variant="h5"
                      style={{ marginBottom: 5, textAlign: "right" }}
                    >
                      محمد صالح
                    </Typography>
                    <Typography style={{ textAlign: "right" }}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز
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
                  <Grid item xs zeroMinWidth>
                    <Typography
                      component={"h4"}
                      variant="h5"
                      style={{ marginBottom: 5, textAlign: "right" }}
                    >
                      امیر اکبری
                    </Typography>
                    <Typography style={{ textAlign: "right" }}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز
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
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <Box className={classes.addComment}>
                <Typography variant="h6">اضافه کردن نظر</Typography>
                <Box sx={{ mb: 2, mt: 1 }} display={"flex"}>
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
                  <Grid>
                    <Box className={classes.containerFormComment}>
                      <Grid className={classes.inputs} item xs={12} md={5}>
                        <Box>
                          <OutlinedInput
                            className={classes.input}
                            id="outlined-adornment-weight"
                            placeholder="نام"
                          />
                        </Box>
                      </Grid>
                      <Grid className={classes.inputs} item xs={12} md={5}>
                        <Box>
                          <OutlinedInput
                            className={classes.inputMid}
                            id="outlined-adornment-weight"
                            placeholder="ایمیل"
                          />
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                  <Box sx={{ mt: 2 }} className={classes.inputs}>
                    <OutlinedInput
                      className={classes.input}
                      id="outlined-adornment-weight"
                      multiline
                      rows={8}
                      placeholder="نظر خود را بنویسید"
                    />
                  </Box>
                  <Button
                    className={classes.CommentButton}
                    style={{
                      height: 42,
                      marginTop: 10,
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
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
