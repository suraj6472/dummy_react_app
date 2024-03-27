import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Container,
} from "@mui/material";
import Layout from "./layout/Layout";
import backendAction from "../utils/backend";
import { useLoaderData, useNavigate } from "react-router";
import { useParams } from "react-router";

function TestAttempt() {
  const data = useLoaderData();
  let { test_id } = useParams();
  const navigate = useNavigate();

  const answers = [];

  const checkOptionHandler = (question_id, option) => {
    let index = answers.findIndex((ans) => ans.question_id === question_id);
    if (index !== -1) {
      answers[index].option = option;
    } else {
      answers.push({ question_id, option });
    }
  };

  const handleSubmit = async () => {
    const res = await backendAction.saveAnswers({ test_id, answers });
    if (res.status === "success") {
      return navigate(`/view-attempted-test/${test_id}`);
    }
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Multiple Choice Questions
        </Typography>
        <form>
          {data.data.questions.map((question) => (
            <FormControl key={question.id} sx={{ margin: 3 }}>
              <Typography variant="h6">{question.details}</Typography>
              <RadioGroup
                aria-label={`question-${question.id}`}
                name={`question-${question.id}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "8px",
                }}
              >
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label={question.a}
                  onClick={() => checkOptionHandler(question.id, "a")}
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label={question.b}
                  onClick={() => checkOptionHandler(question.id, "b")}
                />
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label={question.c}
                  onClick={() => checkOptionHandler(question.id, "c")}
                />
                <FormControlLabel
                  value="d"
                  control={<Radio />}
                  label={question.d}
                  onClick={() => checkOptionHandler(question.id, "d")}
                />
              </RadioGroup>
            </FormControl>
          ))}
        </form>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Container>
      </Container>
    </Layout>
  );
}

export default TestAttempt;

export const loader = ({ params }) => {
  return backendAction.getTestQuestions(params);
};
