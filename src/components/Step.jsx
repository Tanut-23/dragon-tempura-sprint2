import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "./radio";
import ShippingAddress from "./ShippingAddress";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import ButtonSubmit from "./ButtonSubmit";
import Address from "./Address";

const steps = ["Shipping Method", "Shipping Address", "Payment Method"];

export default function HorizontalLinearStepper({setShipcost}) {
  const [addressInput, setAddressInput] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    stateAndProvince: "",
    zip: "",
    country: "",
  });

  const [error, setError] = useState({
    firstName: 0,
    lastName: 0,
    emailAddress: 0,
    phoneNumber: 0,
    addressLineOne: 0,
    addressLineTwo: 0,
    city: 0,
    stateAndProvince: 0,
    zip: 0,
    country: 0,
  });

  const [shipping, setShippig] = useState("option3")

  const shippingCost = shipping === "option3" ? 350 : shipping === "option1" ? 500 : 150;

  setShipcost(shippingCost);

  const handleSubmit = () => {
    let checkError = false;

    Object.entries(addressInput).forEach(([name, value]) => {
      const isOptional = name === "addressLineTwo" || name === "city";

      if (!value) {
        setError((prevValue) => ({
          ...prevValue,
          [name]: isOptional ? 0 : 1,
        }));
        if (!isOptional) checkError = true;
      } else if (
        name === "emailAddress" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        setError((prevValue) => ({
          ...prevValue,
          [name]: 2,
        }));
        checkError = true;
      } else if (
        name === "phoneNumber" &&
        !(
          /^0\d{9}$/.test(value) ||
          /^0\d{2}-\d{3}-\d{4}$/.test(value) ||
          /^\+\d{1,3}\s\d{2,3}-\d{3}-\d{4}$/.test(value) ||
          /^\+\d{1,3}\s\d{9,10}$/.test(value)
        )
      ) {
        setError((prevValue) => ({
          ...prevValue,
          [name]: 2,
        }));
        checkError = true;
      } else {
        setError((prevValue) => ({
          ...prevValue,
          [name]: 0,
        }));
      }
      // console.log("At end", checkError);
    });

    return checkError;
  };

  const step = [
    <Radio setShippig={setShippig}/>,
    <Address
      addressInput={addressInput}
      setAddressInput={setAddressInput}
      error={error}
      handleSubmit={handleSubmit}
    />,
    <PaymentMethod />,
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 1) {
      const hasErrors = handleSubmit();
      if (hasErrors) {
        return;
      }
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const nextLabel = activeStep === steps.length - 1 ? "Finish" : "Next";

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <Typography
                  sx={{
                    width: "full",
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* ---------------------------------------------------------------------- Change Step ------ */}
          <div className="pt-[32px]">{step[activeStep]}</div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <ButtonSubmit
              onClick={handleBack}
              mate={activeStep === 0}
              label="Back"
            />
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep < steps.length - 1 && (
              <ButtonSubmit onClick={handleSkip} label="Skip" />
            )}
            <ButtonSubmit onClick={handleNext} ml="16px" label={nextLabel} />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}