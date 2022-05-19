import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SizePicker() {
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 70 }}>
        <Select
          style={{ height: 40 }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>انتخاب کنید...</em>
          </MenuItem>
          <MenuItem value={10}>x</MenuItem>
          <MenuItem value={20}>m</MenuItem>
          <MenuItem value={30}>xl</MenuItem>
          <MenuItem value={30}>xxl</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
