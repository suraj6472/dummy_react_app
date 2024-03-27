import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import Layout from "./layout/Layout";

export default function UserList() {
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Correct Answers</TableCell>
              <TableCell>Percentage</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell>Mar 8, 2024</TableCell>
              <TableCell>GK</TableCell>
              <TableCell>5</TableCell>
              <TableCell>80%</TableCell>
              <TableCell>
                {" "}
                <Button type="submit" fullWidth>
                  {" "}
                  View{" "}
                </Button>{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
