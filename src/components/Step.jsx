import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from './radio';
import ShippingAddress from './ShippingAddress';
import ShippingMethod from './ShippingMethod';
import PaymentMethod from './PaymentMethod'
import ButtonSubmit from './ButtonSubmit';
import Address from './Address';

const steps = ['Shipping Method', 'Shipping Address', 'Payment Method'];
const step = [<Radio />,  <Address />, <PaymentMethod />];

// const stepHead =[
//     <div className ="flex gap-[16px] py-[16px] pt-[32px] ">
//         <Typography sx={{ width:"100%", color: "primary.main" , fontWeight:600, fontSize: "1.5rem"}}>Shipping Method</Typography>
//     </div>,
//     <div className ="flex gap-[16px] py-[16px] pt-[32px] ">
//         <Typography sx={{ width:"100%", color: "primary.main" , fontWeight:600, fontSize: "1.5rem"}}>Shipping Address</Typography>
//     </div>,
//     <div className ="flex gap-[16px] py-[16px] pt-[32px] ">
//         <Typography sx={{ width:"100%", color: "primary.main" , fontWeight:600, fontSize: "1.5rem"}}>Payment Method</Typography>
//     </div>];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
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

  const Test = activeStep === steps.length - 1 ? 'Finish' : 'Next';

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}><Typography sx={{ width: "full", color: "primary.main" , fontWeight:600, fontSize: "1rem",}}>{label}</Typography></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        // ---------------------------------------------------------------------------------------> here
        <React.Fragment sx={{width: "100vw"}}>
          {/* {stepHead[activeStep]} */}
          <div className='pt-[32px]'>{step[activeStep]}</div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 0 , background:""}}
            >
              Back
            </Button> */}
            <ButtonSubmit onClick={handleBack}   mate={activeStep === 0} label={"Back"}></ButtonSubmit>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep < steps.length - 1 && (
              // <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, background:"" }}>
                <ButtonSubmit onClick={handleSkip} label={"Skip"}></ButtonSubmit>
              // </Button>
            )}
            {/* <Button onClick={handleNext}>
            <ButtonSubmit label={Test}></ButtonSubmit>
            </Button> */}
            <ButtonSubmit onClick={handleNext} ml="16px" label={Test}></ButtonSubmit>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
