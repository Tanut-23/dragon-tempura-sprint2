import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

export default function ButtonToggle({ label1, label2, onClick1, onClick2 }) {
  const [value, setValue] = useState("fixPrice");   //to change color of active button

  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };
  return (
    <div>
      <ToggleButtonGroup sx={{height: "42px",}} value={value} exclusive onChange={handleChange}>
        <ToggleButton
          value="fixPrice"
          onClick={onClick1}
          sx={{
            color: "primary.main", // default text color
            "&.Mui-selected": {
              backgroundColor: "primary.main", // selected background
              color: "white", // selected text color
              "&:hover": {
                backgroundColor: "primary.dark", // hover when selected
              },
            },
          }}
        >
          {label1}
        </ToggleButton>
        <ToggleButton
          value="auction"
          onClick={onClick2}
          sx={{
            color: "primary.main", // default text color
            "&.Mui-selected": {
              backgroundColor: "primary.main", // selected background
              color: "white", // selected text color
              "&:hover": {
                backgroundColor: "primary.dark", // hover when selected
              },
            },
          }}
        >
          {label2}
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
