import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Button, TextField } from "@mui/material";
import Layout from "./layout/Layout";
import { Link } from "react-router-dom";
import firebaseAction from "../utils/firebaseDb";
import { useState, useEffect } from "react";
import backendAction from "../utils/backend";

export default function FilterTestQuestion() {
  const [topics, setTopics] = useState([]);
  const [proceed, setProceed] = useState(false);
  const [testId, setTestId] = useState(null);

  useEffect(() => {
    backendAction.getTopics().then((topics) => setTopics(topics));
  }, []);

  const filterQuestionHandler = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const filter = {};
    for (let [name, value] of data.entries()) {
      filter[name] = value;
    }
    backendAction.filterTestQuestions(filter).then((res) => {
      if (res.status === "success") {
        setProceed(res.status === "success");
        setTestId(res.data.test_id);
      }
    });
  };

  return (
    <Layout>
      <Box
        component="form"
        noValidate
        onSubmit={filterQuestionHandler}
        sx={{ mt: 3 }}
      >
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">Topic</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            label="Topic *"
            name="topic_id"
            defaultValue=""
          >
            {topics.map((topic) => (
              <MenuItem value={topic.id} key={topic.id}>
                {topic.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">
            Difficulty
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            name="difficulty"
            label="Difficulty *"
            defaultValue=""
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <TextField
            required
            id="questions"
            label="Number of questions"
            name="questions"
            autoComplete="questions"
          />
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <Button variant="contained" size="large" type="submit">
            Filter
          </Button>
        </FormControl>
        {proceed && (
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <Link
              to={`/test-started/${testId}`}
              className="link-offset-2 link-underline link-underline-opacity-0 float-end btn btn-success"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {" "}
              Proceed to test{" "}
            </Link>
          </FormControl>
        )}
      </Box>
    </Layout>
  );
}
