// import { Box, TextField, Typography } from "@mui/material";
// import { refType } from "@mui/utils";
// import React, { useRef, useState } from "react";

// export default function ColorPicker({ id }) {
//   const [state, setState] = useState(false);
//   setState(document.getElementById(id).checked);
//   console.log(state);
//   // const radioButtons = document.querySelectorAll('input[name="color"]');
//   // const inputRef = useRef(null);

//   // console.log(document.getElementById(id).checked, id);

//   // const stateHandler = () => {
//   //   setState(!state);
//   // };
//   return (
//     <Box>
//       <Typography>رنگ</Typography>

//       <Box
//         style={{
//           width: 20,
//           height: 20,
//           backgroundColor: id,
//           borderRadius: "15px",
//           display: "flex",
//           justifyContent: "center",
//           border: "2px solid ",
//         }}
//       >
//         <input
//           style={{ opacity: 0.4 }}
//           type="radio"
//           id={id}
//           name="color"
//           // onChange={stateHandler}
//           // value={}
//           // ref={inputRef}
//         />
//       </Box>
//     </Box>
//   );
// }

import React from "react";
import { CirclePicker } from "react-color";

export default function ColorPicker() {
  const colors = ["#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555"];
  const onChangeHandler = (color, event) => {
    console.log(color, event);
  };
  return (
    <CirclePicker circleSpacing={10} circleSize={20} colors={colors} onChange={onChangeHandler} />
  );
}
