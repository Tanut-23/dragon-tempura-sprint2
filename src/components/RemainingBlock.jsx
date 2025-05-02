import { Box, Stack, Typography, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

function TimeBlock({ num, text }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Paper
        sx={{
          height: 30,
          lineHeight: "30px",
          width: 36,
          backgroundColor: "primary.lightChocolate",
          color: "white",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        {num}
      </Paper>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.875rem",
          color: "primary.chocolate",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default function RemainingBlock({
  timeLeft = 10000,
  width = "250px",
  paddingLeft = "85px",
}) {
  // const initialTime = Number(day)*(86400) + Number(hour)*(3600) + Number(min)*(60) + Number(sec);  // const initialTime = 1*(86400) + 2*(3600) + 55*(60) + 10 // {days, hours, min, sec} = {1, 2, 55, 10}
  console.log(timeLeft);
  const [showTimeLeft, setShowTimeLeft] = useState();

  // Wait for timeLeft Prop *****
  useEffect(() => {
    setShowTimeLeft(Math.floor(timeLeft / 1000));
  }, [timeLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }
        let newTimeLeft = prev - 1;
        // console.log(newTimeLeft)
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showTimeLeft]);

  //   console.log("show" + showTimeLeft);
  //Change SECOND to {days, hours, min, sec}
  const remainingDays = Math.floor(showTimeLeft / 86400);
  const remainingHours = Math.floor((showTimeLeft % 86400) / 3600);
  const remainingMin = Math.floor((showTimeLeft % 3600) / 60);
  // console.log(remainingMin)
  const remainingSec = showTimeLeft % 60;

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ width: { width }, paddingLeft: { paddingLeft }, marginBottom: 0 }}
    >
      {/* <Typography>{remainingHours}</Typography> */}
      <TimeBlock num={String(remainingDays).padStart(2, "0")} text="Days" />
      <Typography sx={{ lineHeight: "30px", color: "primary.chocolate" }}>
        :
      </Typography>
      <TimeBlock num={String(remainingHours).padStart(2, "0")} text="Hours" />
      <Typography sx={{ lineHeight: "30px", color: "primary.chocolate" }}>
        :
      </Typography>
      <TimeBlock num={String(remainingMin).padStart(2, "0")} text="Min" />
      <Typography sx={{ lineHeight: "30px", color: "primary.chocolate" }}>
        :
      </Typography>
      <TimeBlock num={String(remainingSec).padStart(2, "0")} text="Sec" />
    </Stack>
  );
}
