import React from "react";
import {
  Paper,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
} from "@mui/material";

// import {CheckIcon, CloseIcon} from '@mui/icons-material';

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Layout from "./layout/Layout";
import backendAction from "../utils/backend";
import { useLoaderData } from "react-router";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    correctAnswer: "Paris",
    difficulty: "Easy",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    difficulty: "Medium",
  },
  {
    id: 3,
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Mark Twain"],
    correctAnswer: "Harper Lee",
    difficulty: "Hard",
  },
];

const userAnswers = {
  1: "Paris",
  2: "Mars",
  3: "Stephen King",
};

function calculateMarks(questions) {
  let totalMarks = 0;
  questions.forEach((question) => {
    // console.log(question)
    console.log(question["answer_option"]);
    console.log(question.pivot.user_answer);
    if (question["answer_option"] === question.pivot.user_answer) {
      if (question.difficulty === "easy") {
        totalMarks += 1;
      } else if (question.difficulty === "medium") {
        totalMarks += 2;
      } else if (question.difficulty === "hard") {
        totalMarks += 3;
      }
    }
  });
  return totalMarks;
}

function ViewAttemptedTest() {
  const data = useLoaderData();
  console.log(data)
  const obtainedMarks = calculateMarks(data.data.questions);

  return (
    <Layout>
      <Container maxWidth="sm">
        <Paper sx={{ padding: 2, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Test Result
          </Typography>
          <Typography variant="h6" gutterBottom>
            Obtained Marks: {obtainedMarks}
          </Typography>
          <List>
            {data.data.questions.map((question) => (
              <div key={question.id}>
                <ListItem>
                  <ListItemText
                    primary={question.details}
                    secondary={`Difficulty: ${question.difficulty}`}
                  />
                  {question["answer_option"] === question.pivot.user_answer && (
                    <ListItemIcon>
                      <IconButton edge="end" disabled>
                        <CheckIcon color="success" />
                      </IconButton>
                    </ListItemIcon>
                  )}

                  {question["answer_option"] !== question.pivot.user_answer && (
                    <ListItemIcon>
                      {" "}
                      <IconButton edge="end" disabled>
                        <CloseIcon color="error" />{" "}
                      </IconButton>
                    </ListItemIcon>
                  )}
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Your Answer: ${
                      question[question.pivot.user_answer] ?  question[question.pivot.user_answer] : ''
                    }`}
                    secondary={`Correct Answer: ${
                      question[question.answer_option]
                    }`}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Paper>
      </Container>
    </Layout>
  );
}

export default ViewAttemptedTest;

export const loader = ({ params }) => {
  return backendAction.viewTestResult(params.test_id);
};
