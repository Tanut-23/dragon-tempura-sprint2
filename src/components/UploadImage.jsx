import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Box, Button, IconButton } from "@mui/material";
import axios from "axios";
import ClearIcon from '@mui/icons-material/Clear';

export default function UploadImage({ setImage, image }) {
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
      const image = res.data.secure_url;
      setHaveProduct(true);
      setImage(image);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setImage("")
    setHaveProduct(false);
  }

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
      <div>
      {!loading &&(
        <div className="relative flex flex-col gap-4 items-center w-full px-8 pt-8 bg-[#f8e4d4c5] rounded-md">
        <img
          src={image || ""}
          alt=""
          className="w-[80%] h-[300px] bg-gray-100 object-cover"
          />
          {image && !loading && (
         <IconButton sx={{bgcolor:"white"}} className="absolute bottom-78 left-50" aria-label="delete" onClick={handleRemoveImage}>
           <ClearIcon sx={{color: "red"}} />
         </IconButton>
       )}
      </div>)}
       {/* -----Loading----- */}
       
        {loading && (
          <div className="relative flex flex-col items-center w-full p-8 bg-[#f8e4d4c5] rounded-md h-[300px]">
          <div className="absolute inset-0 flex justify-center items-center bg-gray-600 bg-opacity-40">
            <p className="text-center text-white text-lg font-semibold absolute top-60">
              Loading . . .
            </p>
          </div>
        </div>
        )}
        {/* ------No image------ */}
        {!loading && !image && (
          <div className="flex justify-center">
            <p className="absolute text-gray-600 text-center top-1/2 -translate-y-1/2"> You haven't posted product. </p>
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
