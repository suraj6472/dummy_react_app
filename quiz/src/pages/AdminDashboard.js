import { Container, Typography } from "@mui/material";
import Layout from "./layout/Layout";

function AdminDashboard(params) {
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
          Admin Dashboard
        </Typography>
      </Container>
    </Layout>
  );
}

export default AdminDashboard;
