import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import axios from "axios";

export default function UploadImage({setImage , image}) {
  const [loading, setLoading] = useState(false);
  const [haveProduct, setHaveProduct] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "dragon-tempura-project");
    data.append("cloud_name", "dnkaoicoo");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dnkaoicoo/image/upload",
        data
      );
      const image = res.data.secure_url
      setHaveProduct(true);
      setImage(image);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };


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
        {haveProduct ? (
          <div></div>
        ) : (
          <img src="" alt="" className="w-[80%] h-[300px] bg-gray-100" />
        )}
        {loading ? (
          <div>
            <img src={image} className="w-[80%] h-[300px] object-cover" />
            <p className="text-center absolute top-60">Loading . . .</p>
          </div>
        ) : haveProduct ? (
          <img src={image} className="w-[80%] h-[300px] object-cover" />
        ) : (
          <div>
            <p className="text-gray-600"> You haven't posted product. </p>
          </div>
        )}
      </div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput type="file" onChange={handleFileUpload} multiple />
      </Button>
    </div>
  );
}
