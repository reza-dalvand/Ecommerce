import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useStyles from "./style";
import { Box, Divider } from "@mui/material";
import fation2 from "../../assets/images/fation2.png";
export default function DropDownNavbar(props) {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            className={classes.dropDownNavbar}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            {props.title}
            <ArrowDropDownIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <Box className={classes.productMenuNavbar}>
              <Box>
                <MenuItem
                  className={classes.dropDownNavbarItem}
                  onClick={popupState.close}
                >
                  هدفون دیجی مکث
                </MenuItem>
                <Divider />

                <MenuItem
                  className={classes.dropDownNavbarItem}
                  onClick={popupState.close}
                >
                  تیشرت و پیراهن مردانه
                </MenuItem>
                <Divider />

                <MenuItem
                  className={classes.dropDownNavbarItem}
                  onClick={popupState.close}
                >
                  لباس زنانه تابستانی
                </MenuItem>
                <Divider />

                <MenuItem
                  className={classes.dropDownNavbarItem}
                  onClick={popupState.close}
                >
                  لباس مجلسی زنانه
                </MenuItem>
                <Divider />
                <MenuItem
                  className={classes.dropDownNavbarItem}
                  onClick={popupState.close}
                >
                  عینک و زیور آلات
                </MenuItem>
              </Box>
              <Box
                sx={{ width: 250, height: 400, p:2 }}
                component="img"
                src={fation2}
                alt="image"
              />
            </Box>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
