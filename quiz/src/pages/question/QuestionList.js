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
import { Link, useLoaderData } from "react-router-dom";
import firebaseAction from "../../utils/firebaseDb";
import backendAction from "../../utils/backend";

export default function QuestionList() {
  const questions = useLoaderData();

  return (
    <Layout>
      <TableContainer component={Paper}>
        <Link
          to="/question/create"
          variant="contained"
          className="btn btn-primary float-end"
        >
          Add New
        </Link>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Question</TableCell>
              <TableCell align="right">Answer</TableCell>
              <TableCell align="right">Topic</TableCell>
              <TableCell align="right">Option A</TableCell>
              <TableCell align="right">Option B</TableCell>
              <TableCell align="right">Option C</TableCell>
              <TableCell align="right">Option D</TableCell>
              <TableCell align="right">Difficulty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question) => (
              <TableRow key={question.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {question.id}
                </TableCell>
                <TableCell>{question.details}</TableCell>
                <TableCell>{question[question.answer_option]}</TableCell>
                <TableCell>{question.topic.name}</TableCell>
                <TableCell>{question.a}</TableCell>
                <TableCell>{question.b}</TableCell>
                <TableCell>{question.c}</TableCell>
                <TableCell>{question.d}</TableCell>
                <TableCell>{question.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export const loader = async () => {
  return await backendAction.getQuestions()
};
