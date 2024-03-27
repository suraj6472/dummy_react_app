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
import { Link, useLoaderData } from "react-router-dom";
import backendAction from "../utils/backend";

const calculateMarksPerc = (questions) => {
  let totalMarks = 0;
  let obtainedMarks = 0;
  questions.forEach(question => {
    if (question.difficulty === "easy") {
      totalMarks += 1;
      if(question["answer_option"] === question.pivot.user_answer) {
        obtainedMarks += 1
      }
    } else if (question.difficulty === "medium") {
      totalMarks += 2;
      if(question["answer_option"] === question.pivot.user_answer) {
        obtainedMarks += 2
      }
    } else if (question.difficulty === "hard") {
      totalMarks += 3;
      if(question["answer_option"] === question.pivot.user_answer) {
        obtainedMarks += 3
      }
    }
  })
  console.log(totalMarks)
  console.log(obtainedMarks)
  return (obtainedMarks/totalMarks * 100).toPrecision(2)
}

export default function TestList() {
  const data = useLoaderData();
  console.log(data.data)
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Percentage</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.map((test, index) => (
              <TableRow key={test.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  { index + 1 }
                </TableCell>
                <TableCell>{test.created_at}</TableCell>
                <TableCell>{test.topic.name}</TableCell>
                <TableCell>{calculateMarksPerc(test.questions)}%</TableCell>
                <TableCell>
                  {" "}
                  <Link to={`/view-attempted-test/${test.id}`}> View </Link>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export const loader = () => {
  return backendAction.getTests();
};
