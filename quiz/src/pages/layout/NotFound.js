import * as React from "react";
import { Typography, Container } from "@mui/material";
import Layout from "./Layout";

export default function NotFound() {
  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <Typography variant="body2" color="text.secondary" align="center">
          Not Found
        </Typography>
      </Container>
    </Layout>
  );
}
