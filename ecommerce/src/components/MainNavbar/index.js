import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../../assets/images/logo.png";
import { MailOutline } from "@mui/icons-material";
import DropDownNavbar from "../DropDown";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { Button, OutlinedInput } from "@mui/material";
import TemporaryDrawer from "../HambergerMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
export default function MainNavbar() {
  const [showSearchBox, setShowSearchBox] = React.useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const showSearchBoxHandeler = () => {
    setShowSearchBox(!showSearchBox);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ mt: 4 }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <AccountCircleIcon sx={{ mr: 1 }} />
        حساب کاربری
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <SettingsIcon sx={{ mr: 1 }} />
        تنظیمات
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <AppRegistrationIcon sx={{ mr: 2 }} />
        ثبت نام / ورود
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailOutline />
          </Badge>
        </IconButton>
        <p>پیغام ها</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <p>هشدار ها </p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>حساب کاربری</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.mainContainer}>
        <Toolbar
          className={classes.badgeIcon}
          style={{
            display: "flex",
            justifyContent: "space-between !important",
          }}
        >
          <TemporaryDrawer className={classes.hambergerMenu} />
          <Box
            component="img"
            sx={{
              height: 27,
              width: 100,
            }}
            alt="logo"
            src={logo}
          />
          <Box sx={{ flexGrow: 1 }} className={classes.navbarLink}>
            <Link
              to="/"
              underline="none"
              className={classes.removeUnderLineLink}
            >
              خانه
            </Link>
            <Link
              to="/products"
              underline="none"
              className={classes.removeUnderLineLink}
            >
              <DropDownNavbar title={"محصولات"} />
            </Link>
            <Link
              to="/blogs"
              underline="none"
              className={classes.removeUnderLineLink}
            >
              وبلاگ
            </Link>
            <Link
              to="/contact"
              underline="none"
              className={classes.removeUnderLineLink}
            >
              تماس با ما
            </Link>
            <Link
              to="/about"
              underline="none"
              className={classes.removeUnderLineLink}
            >
              درباره ما
            </Link>
          </Box>
          <Box className={classes.boxBadgeIconSearch}>
            <IconButton
              onClick={() => showSearchBoxHandeler()}
              size="small"
              color="inherit"
            >
              <Badge>
                <SearchIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={100} max={99} color="error">
                <MailOutline className={classes.badgeIcon} />
              </Badge>
            </IconButton>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={19} color="error">
                <NotificationsNoneIcon className={classes.badgeIcon} />
              </Badge>
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle className={classes.badgeIcon} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {showSearchBox && (
        <Box className={classes.searchBox}>
          <OutlinedInput
            className={classes.searchBoxInput}
            placeholder="دنبال چه چیزی هستید..."
          />
          <Button
            sx={{ mx: 1 }}
            className={classes.searchBoxButton}
            variant="contained"
          >
            جستجو
          </Button>
        </Box>
      )}
    </Box>
  );
}
