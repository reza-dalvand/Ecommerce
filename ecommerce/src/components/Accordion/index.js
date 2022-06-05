import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, FormControl, TextField } from "@mui/material";
import useStyles from "./style";

export default function SimpleAccordion() {
  const classes = useStyles();
  return (
    <Box sx={{ my: 10 }} className={classes.container}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ویرایش مشخصات</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <FormControl className={classes.infoForm}>
              <Box className={classes.BoxNameAndFamily}>
                <TextField
                  className={classes.fieldNameAndFamily}
                  required
                  id="outlined-required"
                  label="نام"
                  defaultValue=""
                />
                <TextField
                  className={classes.fieldNameAndFamily}
                  required
                  id="outlined-required"
                  label="نام خانوادگی"
                  defaultValue=""
                />
              </Box>
              <TextField
                required
                id="outlined-required"
                label="ایمیل "
                defaultValue=""
              />
              <Box sx={{ my: 2 }} className={classes.BoxNameAndFamily}>
                <TextField
                  className={classes.fieldNameAndFamily}
                  required
                  id="outlined-required"
                  label="تلفن"
                  defaultValue=""
                />
                <TextField
                  className={classes.fieldNameAndFamily}
                  id="outlined-required"
                  label="فکس"
                  defaultValue=""
                />
              </Box>
              <Box className={classes.btnRegister}>
                <Button sx={{ my: 3 }} color="primary" variant="contained">
                  ویرایش
                </Button>
              </Box>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>تغییر رمز عبور</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <FormControl className={classes.infoForm}>
              <TextField
                sx={{ my: 1 }}
                required
                id="outlined-required"
                label="رمز عبور"
                defaultValue=""
              />
              <TextField
                sx={{ my: 2 }}
                required
                id="outlined-required"
                label="تایید رمز عبور"
                defaultValue=""
              />
              <Box className={classes.btnRegister}>
                <Button sx={{ my: 3 }} color="primary" variant="contained">
                  تایید
                </Button>
              </Box>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>ویرایش آدرس</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <FormControl className={classes.infoForm}>
              <TextField
                sx={{ my: 1 }}
                required
                multiline
                rows={4}
                id="outlined-required"
                label="آدرس"
                defaultValue=""
              />
              <Box display="flex">
                <Button
                  sx={{ my: 3, mx: 2 }}
                  color="primary"
                  variant="contained"
                >
                  ویرایش
                </Button>
                <Button sx={{ my: 3 }} color="error" variant="contained">
                  حذف
                </Button>
              </Box>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
