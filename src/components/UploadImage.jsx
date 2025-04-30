import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export default function UploadImage() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div className="flex flex-col">
        <div className="relative flex flex-col items-center w-full p-8 bg-[#f8e4d4c5] rounded-md">
            <img src="" alt="" className="w-[80%] h-[300px] bg-gray-100" />
            <p className="absolute top-60">You haven't posted product.</p>
          </div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
    </div>
  );
}
