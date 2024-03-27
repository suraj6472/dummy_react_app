import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import firebaseAction from "../../utils/firebaseDb";
import { useLoaderData } from "react-router-dom";
import backendAction from "../../utils/backend";

export default function TopicList() {
  const topics = useLoaderData();
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Link to="/topic/create" variant="contained" className="btn btn-primary float-end">Add New</Link>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Topic</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {topics.map(topic => <TableRow key={topic.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {topic.id}
              </TableCell>
              <TableCell>{topic.name}</TableCell>
            </TableRow>)}
            
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export const loader = async() => {
  return await backendAction.getTopics()
}
