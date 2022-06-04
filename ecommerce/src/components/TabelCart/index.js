import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import head3 from "../../assets/images/head3.jpg";
import { Box, Link, Typography } from "@mui/material";
import GroupedButtons from "../GroupedButtons";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#666",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//   image: string,
//   نام: number,
//   قیمت: number,
//   تعداد: number,
//   کل: number,
//   حذف
// ) {
//   return { image, نام, قیمت, تعداد, کل, حذف };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">عکس محصول</StyledTableCell>
            <StyledTableCell align="center">نام محصول</StyledTableCell>
            <StyledTableCell align="center">قیمت</StyledTableCell>
            <StyledTableCell align="center">تعداد</StyledTableCell>
            <StyledTableCell align="center">قیمت تعداد</StyledTableCell>
            <StyledTableCell align="center"> حذف کردن</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              <Box
                component="img"
                sx={{
                  height: 70,
                  width: 60,
                }}
                alt="عکس محصول"
                src={head3}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography>هدفون</Typography>
              <Typography>رنگ: سیاه</Typography>
              <Typography>سایز: متوسط</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">99000 تومان</StyledTableCell>
            <StyledTableCell align="center">
              <GroupedButtons />
            </StyledTableCell>
            <StyledTableCell align="center">198000</StyledTableCell>
            <StyledTableCell align="center">
              <Link href="#">
                <DeleteIcon sx={{ color: pink[500] }} />
              </Link>
            </StyledTableCell>
          </StyledTableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
