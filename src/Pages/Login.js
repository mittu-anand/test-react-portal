import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { BASE_URL, END_POINTS } from "../Constants/Urls";
import { Grid } from "@mui/system";
import logo from "../logo.png";
import { APP_TITLE } from "../Constants/Common";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const url = `${BASE_URL}${END_POINTS.login}`;
      const response = await axios.get(url, { username, password });
      if (response.data.userId) {
        login(response.data.userId);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "25vh", textAlign: "center" }}>
      <Grid container>
        <Grid size={4}>
          <img alt="o-app" src={logo} className="login-image" />
        </Grid>
        <Grid size={8}>
          <Typography className="login-app-title" variant="h4" gutterBottom>
            {APP_TITLE}
          </Typography>
          <Divider />
          <div className="app-signin-title">
            <Typography variant="h5" gutterBottom>
              SIGN IN
            </Typography>
          </div>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              className="login-btn"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
