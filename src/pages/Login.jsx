import React from "react";
import ButtonSubmit from "../components/ButtonSubmit";
import { Box, FormGroup, Link, Stack, Typography } from "@mui/material";
import ColumnInput from "../components/ColumnInput";
import Checkbox from "../components/Checkbox";

export default function Login() {
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
          <h1 class="text-[1.25rem] font-bold text-[var(--chocolate-color)]">
            Welcome back
          </h1>
          <Typography sx={{ fontSize: "0.75rem", color: "primary.fontGray" }}>
            Welcome back to Collectico — your creative journey continues here.
          </Typography>
        </div>
        <div>
          <FormGroup sx={{ gap:"16px" , pt:"16px"}}>
            <ColumnInput
              type={"email"}
              label={"E-mail Address"}
              placeholder={"Enter your email"}
              fontWeight={"bold"}
            />
            <ColumnInput
              type={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
              fontWeight={"bold"}
            />
            <Stack direction={"row"} spacing={10} alignItems="center">
              <Checkbox label={"Remember me"} size="small" />
              <Link
                href="./forgotPassword.html"
                sx={{ color: "primary.fontGray", fontSize: "0.875rem" }}
              >
                Forgot password?
              </Link>
            </Stack>
            <ButtonSubmit type="submit" width={"364px"} label={"Sign up"} />
          </FormGroup>
        </div>
        <div class="flex flex-col gap-[8px] pt-[12px]">
          <div class="flex justify-center gap-[20px]">
            <Typography sx={{ fontSize: "0.875rem" }}>
              Don't have an account yet?
              <Box
                component="a"
                href="./register.html"
                sx={{ ml: 1 , color:"primary.fontGray" , fontSize: "0.875rem" }}
              >
                Sign up
              </Box>
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
}
