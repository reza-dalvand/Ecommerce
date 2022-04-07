import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  dropDownNavbar: {
    backgroundColor: "white !important",
    boxShadow: "none !important",
    color: "#000 !important",
    fontSize: "20px !important",
    fontWeight: "bold !important",
    marginTop: "5px !important",
  },
  dropDownNavbarItem: {
    // fontSize: "15px !important",
    // fontWeight: 400,
  },
});

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
            <MenuItem
              className={classes.dropDownNavbarItem}
              onClick={popupState.close}
            >
              Profile
            </MenuItem>
            <MenuItem
              className={classes.dropDownNavbarItem}
              onClick={popupState.close}
            >
              My account
            </MenuItem>
            <MenuItem
              className={classes.dropDownNavbarItem}
              onClick={popupState.close}
            >
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
