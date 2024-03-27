import * as React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import Layout from "./layout/Layout";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import backendAction from "../utils/backend";
import { useLoaderData } from "react-router";

export default function Profile() {
  const data = useLoaderData()
  const authContext = useContext(AuthContext);
  console.log(authContext)
  return (
    <Layout>
      <Card>
        <CardActionArea>
          <CardContent align="center">
            {!authContext.token && <Typography color="text.secondary">Loading...</Typography>}
            {authContext.token && <Typography color="text.secondary">{data.data.name}</Typography> }
            {authContext.token && <Typography color="text.secondary">{data.data.email}</Typography> }
          </CardContent>
        </CardActionArea>
      </Card>
    </Layout>
  );
}

export const loader = () => {
  return backendAction.getProfile()
}
