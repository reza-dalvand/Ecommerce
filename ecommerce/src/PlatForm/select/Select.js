import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStyles from "./SelectStyle";
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 247,
    },
  },
};

// const names = ["فارسی", "English", "Arabic"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    // backgroundColor: "#333",
    // color: "white",
    // border: "solid 1px white",
    // backgroundColor: { "&:hover": "red" },
  };
}

export default function MultipleSelectPlaceholder({ names, title }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const classes = useStyles();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className={classes.mainFormControl}>
      <FormControl sx={{ m: 1, width: 250, mt: 3 }}>
        <p className={classes.formControlTitle}>{title} </p>
        <Select
          style={{ height: 40, display: "flex", justifyContent: "center" }}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>انتخاب کنید...</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {/* <MenuItem style={getStyles('', personName, theme)} disabled value="">
            <em>انتخاب کنید...</em>
          </MenuItem> */}
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
