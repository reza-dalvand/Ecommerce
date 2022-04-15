import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
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
import MultipleSelectPlaceholder from "../../PlatForm/select/Select";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const classes = useStyles();
  const languagesName = ["فارسی", "English", "Arabic"];
  const unitMony = ["IRR", "USD"];

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.itemInHamberMenu}>
        {["خانه", "محصولات", "وبلاگ", "تماس با ما"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText
              // style={{ textAlign: "left" }}
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
      <Box
        sx={{ width: 300 }}
      >
        <MultipleSelectPlaceholder
          names={languagesName}
          title="انتخاب زبان : "
        />
        <MultipleSelectPlaceholder names={unitMony} title="واحد پول : " />
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={"left"}>
          <IconButton
            className={classes.hambergerMenu}
            onClick={toggleDrawer("left", true)}
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
