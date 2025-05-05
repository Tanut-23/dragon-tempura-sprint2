import React, { useState } from "react";
import ButtonSubmit from "../components/ButtonSubmit";
import { Box, FormGroup, Link, Stack, Typography } from "@mui/material";
import ColumnInput from "../components/ColumnInput";
import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const checkLoginUser = {
      email,
      password,
    }

    try {
      const res = await axios.post("http://localhost:3000/api/users-login" , checkLoginUser);

      alert("Login success, Welcome to Collectico!");
      navigate("/register")
    } catch (err){
      if (err.response) {
        alert(err.response.data.message || "Login failed");
      } else {
        alert("Something went wrong, please try again later ;-;");
      }
      console.error(err);
    }
  }

  return (
    <div>
      <Box
        sx={{
          bgcolor: "primary.mainSectionRegister",
          gap: "12px",
          py: "42px",
          px: "82px",
          border: "4px solid white",
          borderRadius: "20px",
        }}
      >
        <div class="flex flex-col justify-center items-center gap-[8px]">
          <img src="logo/logo.png" className="w-[60px] pb-[12px]" />
          <Typography sx={{fontSize:"1.5rem" , fontWeight:"bold" , color: "primary.main"}}>
            Welcome back
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", color: "primary.fontGray" }}>
            Welcome back to Collectico — your creative journey continues here.
          </Typography>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
          <FormGroup sx={{ gap: "16px", pt: "16px" , color: "primary.main" }}>
            <ColumnInput
              required
              type={"email"}
              label={"E-mail Address"}
              placeholder={"Enter your email"}
              fontWeight={"bold"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ColumnInput
              type={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
              fontWeight={"bold"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
              <Checkbox label={"Remember me"} size="small" />
              <Box
                component="a"
                href="./forgotPassword.html"
                sx={{ color: "primary.fontGray", fontSize: "0.875rem" }}
              >
                Forgot password?
              </Box>
            </Stack>
            <ButtonSubmit type="submit" 
            width={"364px"} 
            label={"Sign up"} />
          </FormGroup>
        </form>
        </div>
                <div class="flex flex-col pt-[12px]">
          <Typography sx={{ fontSize: "0.875rem" , color: "primary.fontGray", placeSelf: "center" }}>
            Don't have an account yet?
            <Box
              component="a"
              href="./Register.jsx"
              sx={{ ml: 2, fontSize: "0.875rem" }}
            >
              Sign in
            </Box>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
