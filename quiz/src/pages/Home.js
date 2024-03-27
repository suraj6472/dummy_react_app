import * as React from "react";
import { Typography, Container } from "@mui/material";
import Layout from "./layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "78vh",
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          Welcome
        </Typography>
      </Container>
    </Layout>
  );
}
