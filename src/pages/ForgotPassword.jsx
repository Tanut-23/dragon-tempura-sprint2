import React, { useState } from "react";
import ButtonSubmit from "../components/ButtonSubmit";
import { Box, FormGroup, Link, Stack, Typography } from "@mui/material";
import ColumnInput from "../components/ColumnInput";
import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email,setEmail] = useState("");
  const [password,setNewPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const passwordLength = password.length > 8;
    const haveUpperCase = /[A-Z]/.test(password);
    const haveLowerCase = /[a-z]/.test(password);

    
    if ( !passwordLength || !haveUpperCase || !haveLowerCase ) {
      const errorPassword = "Password must have longer than 8 characters and have uppercase and lowercase letter"
      alert(errorPassword);
      return;
    }

    const checkResetPasswordUser = {
      email,
      password,
    }

    try {
      const res = await fetch("http://localhost:3000/api/users-resetPassword" , {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkResetPasswordUser)
      });

      const result = await res.json();

      if (res.ok){
        alert("Password is changed already!");
        navigate("/login")
      } else {
        alert(result.message || "Reset password failed");
      }
    } catch (err){
      console.log(err);
      alert("Something wrong try again later ;-;")
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
            If you can't remember your password , Let we help you.
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
              label={"Pew password"}
              placeholder={"Enter your new password"}
              fontWeight={"bold"}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <ButtonSubmit type="submit"
            marginY={"20px"}
            width={"364px"} 
            label={"Submit"} />
          </FormGroup>
        </form>
        </div>
      </Box>
    </div>
  );
}
