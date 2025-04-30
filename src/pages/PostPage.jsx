import React, { useEffect, useState } from "react";
import ButtonToggle from "../components/ButtonToggle";
import Navbar from "../components/Navbar";
import ColumnInput from "../components/ColumnInput";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import UploadImage from "../components/UploadImage";
import ButtonSubmit from "../components/ButtonSubmit";
import { useNavigate } from "react-router-dom";
import TagSeller from "../components/TagSeller";
import PostCard from "../components/PostCard";
import CloseIcon from "@mui/icons-material/Close";

export default function PostPage() {
  // STATE FOR KEEP ONCHANGE INPUT VALUE
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artist, setArtist] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [material, setMaterial] = useState("");
  const [yearCreated, setYearCreated] = useState("");
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState("");
  const [minBidPrice, setMinBidPrice] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  // STATE FOR KEEP ERROR MESSAGE
  const [error, setError] = useState("");

  // STATE FOR AUCTION
  const [auction, setAuction] = useState(false);

  // STATE FOR PREVIEW
  const [preview, setPreview] = useState(false);

  // STATE FOR EDIT MODE
  const [editMode, setEditMode] = useState(false);



  // Function for TOGGLE BUTTON
  function showAuction() {
    setAuction(true);
  }
  function diasableAuction() {
    setAuction(false);
  }

  // Function for VALIDATION
  function validation() {
    const validatedError = {};

    // validate title
    if (!title) {
      validatedError.title = "Title is required!";
    }
    // validate description
    if (!description) {
      validatedError.description = "Description is required!";
    }
    // validate artist
    if (!artist) {
      validatedError.artist = "Artist name is required!";
    }
    // validate dimensions
    if (!dimensions) {
      validatedError.dimensions = "Dimensions is required!";
    }
    // validate material
    if (!material) {
      validatedError.material = "Material is required!";
    }
    // validate yearCreated
    if (!yearCreated) {
      validatedError.yearCreated = "Year Created is required!";
    } else if (isNaN(yearCreated) || !Number.isInteger(+yearCreated)) {
      validatedError.yearCreated = "Invalid year.";
    } else if (yearCreated < 0 || yearCreated > 2025) {
      validatedError.yearCreated = "Please enter a year between 0 to 2025.";
    }
    // validate tags
    if (tags.length === 0) {
      validatedError.tags = "Tag is required!";
    }

    // validate fixed price
    if (!auction) {
      if (!price) {
        validatedError.price = "Price is required!";
      } else if (isNaN(price)) {
        validatedError.price = "Please enter a number.";
      } else if (price <= 0) {
        validatedError.price = "Invalid price!";
      }
    }

    // validate auction minBidPrice
    if (auction) {
      if (!minBidPrice) {
        validatedError.minBidPrice = "Minimum Bid Price is required!";
      } else if (isNaN(minBidPrice)) {
        validatedError.minBidPrice = "Please enter a number.";
      } else if (minBidPrice <= 0) {
        validatedError.minBidPrice = "Invalid Minimum Bid Price!";
      }
    }

    // validate auction days
    if (auction) {
      if (auction && !days) {
        validatedError.days = "Days is required!";
      } else if (!/^[0-7]$/.test(days)) {
        validatedError.days = "Please enter number between 0 and 7.";
      }
    }

    // validate auction hours
    if (auction) {
      if (!hours) {
        validatedError.hours = "Hours is required!";
      } else if (!/^(?:[01]?[0-9]|[2][0-3])$/.test(hours)) {
        validatedError.hours = "Please enter number between 0 and 23.";
      }
    }

    return validatedError;
  }

  //For navigate to another page
  const navigate = useNavigate();

  // Function for SUBMIT BUTTON
  function handleSubmit(e) {
    e.preventDefault();

    const submitter = e.nativeEvent.submitter;
    const action = submitter?.value;

    const validatedError = validation();

    // VALIDATE INPUT FORM
    if (Object.keys(validatedError).length > 0) {
      // If there is an error
      console.log(validatedError);
      setError(validatedError);
    } else {
      // CLICK PREVIEW BUTTON
      if (action === "preview") {
        setError("");
        window.scrollTo({ top: 200, behavior: "smooth" });
        alert("preview");
        setPreview(true);
        console.log(preview);
      }

      // CLICK POST BUTTON
      else if (action === "post") {
        const newProduct = {
          id: Date.now(),
          title: title,
          description: description,
          artist: artist,
          price: price,
          image: "../public/productPicture/Abstract-Painting-Modern-Art-1.jpg",
          dimensions: dimensions,
          material: material,
          yearCreated: yearCreated,
          tags: tags,
          sellerName: "PMate",
        };
        const products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(newProduct);

        localStorage.setItem("products", JSON.stringify(products));

        alert("Your artwork is successfully posted!");
        navigate("/market");
      }

      // CLICK UPDATE BUTTON
      else if (action === "update") {
        const storedProducts =
          JSON.parse(localStorage.getItem("products")) || [];
        const editId = JSON.parse(localStorage.getItem("editId"));
        const updatedProduct = {
          id: editId,
          title: title,
          description: description,
          artist: artist,
          price: price,
          image: "../public/productPicture/Abstract-Painting-Modern-Art-1.jpg",
          dimensions: dimensions,
          material: material,
          yearCreated: yearCreated,
          tags: tags,
          sellerName: "PMate",
        };

        const updatedProducts = storedProducts.map((product) =>
          editId === product.id ? (product = updatedProduct) : product
        );

        localStorage.setItem("products", JSON.stringify(updatedProducts));

        localStorage.removeItem("editId");
        alert("The detail is successfully updated!");
        navigate("/market");
      }
    }
  }

  // For EDIT PRODUCT
  useEffect(() => {
    const editId = JSON.parse(localStorage.getItem("editId"));
    if (editId) {
      const allProducts = JSON.parse(localStorage.getItem("products")) || [];
      const editProduct = allProducts.find((product) => {
        return product.id === editId;
      });
      console.log(editProduct);
      if (editProduct) {
        setTitle(editProduct.title);
        setDescription(editProduct.description);
        setArtist(editProduct.artist);
        setDimensions(editProduct.dimensions);
        setMaterial(editProduct.material);
        setYearCreated(editProduct.yearCreated);
        setTags(editProduct.tags);
        setPrice(editProduct.price);
        setMinBidPrice(editProduct.minBidPrice);
        setDays(editProduct.days);
        setHours(editProduct.hours);
      }

      setEditMode(true);
    }
  }, []);



  return (
    <div className="w-full min-h-[100vh] bg-[#F2EEE7] text-[#62483A] ">
      {/* -------------------NAV BAR----------------- */}
      <Navbar />

      {/* -------------------CONTENT----------------- */}
      <div className="flex flex-col items-center w-full gap-10 py-[60px]">
        {!preview && (
          <h1 className="text-[1.6rem] font-bold">Post Your Product</h1>
        )}
        {preview && <h1 className="text-[1.6rem] font-bold">Preview</h1>}

        {/* ---------------FORM------------- */}
        <form
          action="#"
          className="relative w-[80%] max-w-[800px] min-h-screen py-10 px-15 bg-white rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="pb-2 text-[1.2rem] font-bold">Product Information</h2>
          <hr className="pt-6" />
          {/* ---------------Product detail------------- */}
          <div className=" flex flex-col gap-6">
            {/* TITLE */}
            <Stack>
              <ColumnInput
                label="Title"
                placeholder="Enter a descriptive title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fontWeight="700"
              />
              {error.title && <p className="text-red-500">{error.title}</p>}
            </Stack>

            {/* DESCRIPTION */}
            <Stack>
              <ColumnInput
                label="Description"
                placeholder="Describe your product in detail..."
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fontWeight="700"
                multiline
                rows="4"
              />
              {error.description && (
                <p className="text-red-500">{error.description}</p>
              )}
            </Stack>

            {/* ARTIST */}
            <Stack>
              <ColumnInput
                label="Artist"
                placeholder="Enter an artist name"
                name="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                fontWeight="700"
              />
              {error.artist && <p className="text-red-500">{error.artist}</p>}
            </Stack>

            {/* UploadImage */}
            <Box>
              <UploadImage />
            </Box>

            {/* Edition Detail */}
            <div>
              <h2 className="pb-2 text-[1.1rem] font-bold">Edition Detail</h2>
              <Stack direction="row" spacing={2}>
                {/* DIMENSIONS */}
                <Stack>
                  <ColumnInput
                    label="Dimensions"
                    placeholder="e.g. 24 x 36 inches"
                    name="dimensions"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    fontWeight="700"
                  />
                  {error.dimensions && (
                    <p className="text-red-500">{error.dimensions}</p>
                  )}
                </Stack>
                {/* MATERIAL */}
                <Stack>
                  <ColumnInput
                    label="Material"
                    placeholder="e.g. Oil on canvas"
                    name="material"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    fontWeight="700"
                  />
                  {error.material && (
                    <p className="text-red-500">{error.material}</p>
                  )}
                </Stack>
                {/* YEAR CREATED */}
                <Stack>
                  <ColumnInput
                    label="Year Created"
                    placeholder="YYYY"
                    name="yearCreated"
                    value={yearCreated}
                    onChange={(e) => setYearCreated(e.target.value)}
                    fontWeight="700"
                  />
                  {error.yearCreated && (
                    <p className="text-red-500">{error.yearCreated}</p>
                  )}
                </Stack>
              </Stack>
            </div>

            {/* CATEGORY TAGS */}
            <div>
              <h2 className="pb-3 text-[1.1rem] font-bold">Tags</h2>
              <TagSeller
                onChange={(e, newValue) => setTags(newValue)}
                value={tags}
              />
              {console.log(tags)}
              {error.tags && <p className="text-red-500">{error.tags}</p>}
              {console.log("this is error.tags: " + error.tags)}
            </div>

            {/* -------CHOOSE FIXED PRICE OR AUCTION------ */}
            <div className="buttonToggle">
              <ButtonToggle
                label1="fixed price"
                label2="auction"
                onClick1={diasableAuction}
                onClick2={showAuction}
              />
            </div>

            <div className="bg-[#f8e4d4c5] p-6 rounded-lg">
              {/* Fixed Price */}
              <div
                className={`duration-700 ${
                  auction ? "scale-95 opacity-0" : "scale-100 opacity-100"
                }`}
              >
                {!auction && (
                  // FIXED PRICE
                  <ColumnInput
                    label="Price ($)"
                    placeholder="0.00"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fontWeight="700"
                  />
                )}
                {!auction && error.price && (
                  <p className="text-red-500">{error.price}</p>
                )}
              </div>
              {/* Auction Block */}
              <div
                className={`duration-700 ${
                  auction ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
              >
                {auction && (
                  <Stack spacing={4}>
                    <div>
                      <h2 className="pb-3 text-[1.3rem] font-bold">Auction</h2>
                      <hr />
                    </div>
                    <div>
                      {/* MIN BID PRICE */}
                      <ColumnInput
                        label="Minimum Bid Price ($)"
                        placeholder="0.00"
                        name="minBidPrice"
                        value={minBidPrice}
                        onChange={(e) => setMinBidPrice(e.target.value)}
                        fontWeight="700"
                      />
                      {auction && error.minBidPrice && (
                        <p className="text-red-500">{error.minBidPrice}</p>
                      )}
                      <p className="text-[0.9rem]">
                        Starting price for bidders
                      </p>
                    </div>
                    {/* AUCTION DURATION (TIME)*/}
                    <div>
                      <h3 className="pb-2 text-[1rem] font-[700]">
                        Auction Duration
                      </h3>
                      {/* DAYS */}
                      <Stack direction="row" spacing={2}>
                        <Stack>
                          <ColumnInput
                            label="Days"
                            placeholder="0"
                            name="days"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                          />

                          {auction && error.days && (
                            <p className="text-red-500">{error.days}</p>
                          )}
                        </Stack>

                        <Stack>
                          <ColumnInput
                            label="Hours"
                            placeholder="0"
                            name="hours"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                          />
                          {auction && error.hours && (
                            <p className="text-red-500">{error.hours}</p>
                          )}
                        </Stack>
                      </Stack>
                      <p className="text-[0.9rem]">Maximum duration: 7 days</p>
                    </div>
                  </Stack>
                )}
              </div>
            </div>
            {/* ----- Submit Button ------- */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <ButtonSubmit label="Preview Post" value="preview" px="48px" />
              {!editMode && (
                <ButtonSubmit label="Post Artwork" value="post" px="48px" />
              )}
              {editMode && (
                <ButtonSubmit label="Update detail" value="update" px="48px" />
              )}
            </Stack>
          </div>
          {/* ----- PREVIEW CARD ------- */}
          {preview && (
            <div className="absolute left-0 top-0 flex flex-col items-center gap-4 p-10 w-full h-full bg-[#00000053] rounded-lg backdrop-blur z-10 ">
              <PostCard
                title={title}
                artist={artist}
                price={price}
                auction={false}
              />

              {/* Close Button */}
              <Stack
                onClick={() => {
                  setPreview(false);
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 20,
                  backgroundColor: "primary.text",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "primary.dark", // hover when selected
                    color: "primary.text",
                  },
                }}
              >
                <IconButton
                  aria-label="delete"
                  sx={{
                    color: "primary.dark",
                    "&:hover": {
                      color: "primary.text",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Stack>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
