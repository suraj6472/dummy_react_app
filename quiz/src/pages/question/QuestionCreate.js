import * as React from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Layout from "../layout/Layout";
import firebaseAction from '../../utils/firebaseDb'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import backendAction from "../../utils/backend";
export default function QuestionCreate() {
  const [topics, setTopics] = useState([])
  const navigate = useNavigate();
  
  useEffect(() => {
    backendAction.getTopics().then(data => setTopics(data))    
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const question = {};
    for (let [name, value] of data.entries()) {
      question[name] = value
    }
    backendAction.addQuestion(question)      
    return navigate('/question');
  };

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {" "}
            Add New Question{" "}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="question"
                  label="Question"
                  name="details"
                  autoComplete="question"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Options
                </FormLabel>
                <TextField
                  required
                  fullWidth
                  id="option_a"
                  label="Option A"
                  name="a"
                  autoComplete="off"
                  sx={{ mb: 2, mt: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  id="option_b"
                  label="Option B"
                  name="b"
                  autoComplete="off"
                  sx={{ mb: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  id="option_c"
                  label="Option C"
                  name="c"
                  autoComplete="off"
                  sx={{ mb: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  id="option_d"
                  label="Option D"
                  name="d"
                  autoComplete="off"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Topic</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="topic"
                    name="topic_id"
                    defaultValue=""
                  >
                  {topics.map(topic => <MenuItem key={topic.id} value={topic.id}>{topic.name}</MenuItem>)}
                    
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Answer Option</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="answer"
                    defaultValue=""
                    name="answer_option"
                  >
                    <MenuItem value="a">Option A</MenuItem>
                    <MenuItem value="b">Option B</MenuItem>
                    <MenuItem value="c">Option C</MenuItem>
                    <MenuItem value="d">Option D</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Difficulty"
                    defaultValue=""
                    name="difficulty"
                  >
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {" "}
              Login{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
