import * as React from "react";
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container} from "@mui/material";
import Layout from "../layout/Layout";
import firebaseAction from '../../utils/firebaseDb'
import { useNavigate } from "react-router-dom";
import backendAction from "../../utils/backend";
export default function TopicCreate() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {  
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const topic = {
      name: data.get("topic"),
    };
    backendAction.addTopic(topic)      
    return navigate('/topic');
  };

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{   marginTop: 8,   display: "flex",   flexDirection: "column",   alignItems: "center", }}>
          <Typography component="h1" variant="h5"> Add New Topic </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField required fullWidth id="topic" label="Topic Address" name="topic" autoComplete="topic" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Add Topic </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export const action = () => {
  console.log('QuestionCreate');
}
