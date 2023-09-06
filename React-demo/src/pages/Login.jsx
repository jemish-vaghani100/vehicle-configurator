import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";
import Footer from "../component/Footer";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
} from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState(null);

  useEffect(() => {
    // Check for the presence of a token in sessionStorage on page load
    const storedToken = sessionStorage.getItem("authToken");
    if (storedToken) {
      // Token found, set the login status to "success"
      setLoginStatus("success");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContinue = () => {
    // Redirect to "/welcome" after successful login
    window.location.href = "/welcome";
  };

  const handleLogout = () => {
    // Add logic to perform logout actions here
    // For example, clearing user data or tokens from localStorage
    // Then, update the loginStatus state to null or "failure"
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("username");

    setLoginStatus("failure");
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let username=formData.username;
    let demo = JSON.stringify(formData);


    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: demo, 
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          sessionStorage.setItem("authToken", data.token);
          sessionStorage.setItem("username",username);
          setLoginStatus("success");
        } else {
          alert("Invalid user");
          setLoginStatus("failure");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoginStatus("failure");
      });
  };

  return (
    <>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Navbar />

        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Topbar />

          <Container maxWidth="false">
            <Box sx={{ flex: 1, overflowY: "auto", padding: "20px" }}></Box>
            <Paper
              elevation={3}
              sx={{ padding: 3, marginTop: 4, marginBottom: 4 }}
            >
              <Typography variant="h4" gutterBottom>
                Login
              </Typography>
              {loginStatus === "success" ? (
                <div>
                  <Typography variant="body1" color="success">
                    You have logged in successfully.
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleContinue}
                    sx={{ marginTop: 2, minWidth: 150, marginRight: 2 }}
                  >
                    Continue
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleLogout}
                    sx={{ marginTop: 2, minWidth: 150 }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="username"
                    type="text"
                    name="username"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    label="password"
                    type="password"
                    name="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    onChange={handleChange}
                  />
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    sx={{ marginTop: 2, minWidth: 150 }}
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Paper>
          </Container>

          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Login;
