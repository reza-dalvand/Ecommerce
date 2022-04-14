import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import useStyles from "./style";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import WebhookIcon from "@mui/icons-material/Webhook";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List className={classes.itemInHamberMenu}>
        {["خانه", "محصولات", "وبلاگ", "تماس با ما"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText
              // style={{ textAlign: "right" }}
              className={classes.hamberMenuItem}
              primary={text}
            />
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <ProductionQuantityLimitsIcon />
              ) : index === 2 ? (
                <WebhookIcon />
              ) : (
                <AddIcCallIcon />
              )}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={"right"}>
          <IconButton
            className={classes.hambergerMenu}
            onClick={toggleDrawer("right", true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
