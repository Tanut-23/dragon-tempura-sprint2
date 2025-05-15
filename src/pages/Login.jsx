import React, { useEffect, useState } from "react";
import ButtonSubmit from "../components/ButtonSubmit";
import { Box, FormGroup, Stack, Typography } from "@mui/material";
import ColumnInput from "../components/ColumnInput";
import Checkbox from "../components/Checkbox";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import baseURL from "../../service/api";

export default function Login({
  onClose,
  switchToRegister,
  switchToForgotPassword,
  prefillEmail = "",
  prefillPassword = "",
}) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const checkLoginUser = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        `${baseURL}/api/users-login`,
        checkLoginUser,
        { withCredentials: true }
      );
      if (res.data.token && res.data.email && res.data._id) {
        const userData = {
          _id: res.data._id,
          email: res.data.email,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
        };
        login(res.data.token, userData);
      } else {
        alert("Cann't login, please try again");
      }
      onClose();
      alert("Login success, Welcome to Collectico!");
      window.location.reload();
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message || "Login failed");
      } else {
        alert("Something went wrong, please try again later ;-;");
      }
      console.error(err);
    }
  }
  useEffect(() => {
    if (prefillEmail) setEmail(prefillEmail);
    if (prefillPassword) setPassword(prefillPassword);
  }, [prefillEmail, prefillPassword]);

  return (
    <div>
      <Box
        sx={{
          bgcolor: "primary.mainSectionRegister",
          gap: "12px",
          py: "42px",
          px: { xs: "24px", sm: "48px", md: "64px", lg: "82px" },
          width: { xs: "90vw", sm: "400px", md: "560px" },
          border: "4px solid white",
          borderRadius: "20px",
          mx: "auto",
        }}
      >
        <div class="flex flex-col justify-center items-center gap-[8px]">
          <img src="https://res.cloudinary.com/dnkaoicoo/image/upload/v1747275164/u1qjduxtlkxl1e9bl4tw.png" className="w-[60px] pb-[12px]" />
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Welcome back
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", color: "primary.fontGray" }}>
            Welcome back to Collectico — your creative journey continues here.
          </Typography>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <FormGroup sx={{ gap: "16px", pt: "16px", color: "primary.main" }}>
              <ColumnInput
                required
                type={"email"}
                label={"E-mail Address"}
                placeholder={"Enter your email"}
                fontWeight={"bold"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ColumnInput
                type={"password"}
                label={"Password"}
                placeholder={"Enter your password"}
                fontWeight={"bold"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Checkbox label={"Remember me"} size="small" />
                <Box sx={{ color: "primary.fontGray", fontSize: "0.875rem" }}>
                  <Box
                    sx={{
                      ml: 2,
                      fontSize: "0.875rem",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={switchToForgotPassword}
                  >
                    forgot password?
                  </Box>
                </Box>
              </Stack>
              <ButtonSubmit type="submit" width={"100%"} label={"Login"} />
            </FormGroup>
          </form>
        </div>
        <div class="flex flex-col pt-[12px]">
          <Box
            sx={{
              fontSize: "0.875rem",
              display: "flex",
              color: "primary.fontGray",
              placeSelf: "center",
            }}
          >
            <Box>Don't have an account yet?</Box>
            <Box
              sx={{
                ml: 2,
                fontSize: "0.875rem",
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={switchToRegister}
            >
              Sign up
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
}
