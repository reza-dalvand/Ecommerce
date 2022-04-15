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
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, OutlinedInput } from "@mui/material";
import TemporaryDrawer from "../HambergerMenu";


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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
        <p>Messages</p>
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
        <p>Notifications</p>
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
        <p>Profile</p>
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
            <Router>
              <Routes>
                <Route exact path="/" />
              </Routes>
            </Router>
            <Router>
              <Link
                to="#"
                underline="none"
                className={classes.removeUnderLineLink}
              >
                خانه{" "}
              </Link>
            </Router>
            <DropDownNavbar title={"محصولات"} />
            <Router>
              <Link
                to="#"
                underline="none"
                className={classes.removeUnderLineLink}
              >
                وبلاگ
              </Link>
            </Router>
            <Router>
              <Link
                to="#"
                underline="none"
                className={classes.removeUnderLineLink}
              >
                تماس با ما
              </Link>
            </Router>
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
            // color="secondery"
            className={classes.searchBoxButton}
            variant="contained"
          >
            جستجو...
          </Button>
        </Box>
      )}
    </Box>
  );
}
