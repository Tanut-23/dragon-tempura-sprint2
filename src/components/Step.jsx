import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from './radio';
import PaymentMethod from './PaymentMethod'
import ButtonSubmit from './ButtonSubmit';
// import Address from './Address';

const steps = ['Shipping Method', 'Shipping Address', 'Payment Method'];

const testAddress =  function Address() {

  const [addressInput, setAddressInput] = useState({
    firstName:'',
    lastName:'',
    emailAddress:'',
    phoneNumber:'',
    addressLineOne:'',
    addressLineTwo:'',
    city:'',
    stateAndProvince:'',
    zip:'',
    country:'',
  });

  const [error, setError] = useState({
    firstName: 0,
    lastName:0,
    emailAddress:0,
    phoneNumber:0,
    addressLineOne:0,
    addressLineTwo:0,
    city:0,
    stateAndProvince:0,
    zip:0,
    country:0
  })

  const handleInput = e => {
    const { id, value } = e.target;
  setAddressInput((prevalue) => ({
    ...prevalue, [id]:value,
  }))

};

  const handleSubmit = e => {
    e.preventDefault(); // prevent reload

    Object.entries(addressInput).forEach(([name, value]) => {

      if (!value) {
        setError((prevalue) => ({
          ...prevalue, [name]: name === "addressLineTwo" || name === "city" ? 0 : 1,
        }));
      } else if (name === "emailAddress" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError((prevalue) => ({
          ...prevalue, [name]: 2
        }));
      } else if (name === "phoneNumber" && !((/^0\d{9}$/.test(value))||(/^0\d{2}-\d{3}-\d{4}$/.test(value))||(/^\+\d{1,3}\s\d{2,3}-\d{3}-\d{4}$/.test(value)) || ((/^\+\d{1,3}\s\d{9,10}$/.test(value))))){
        setError((prevalue) => ({
          ...prevalue, [name]:2
        }));
      }
      else  setError((prevalue) => ({
        ...prevalue, [name]:0
      }))
    })

  };



  return (
    <Paper elevation={3}
    sx={{ p: 3, mb: 4, bgcolor: "#f9f7f3", color: "#62483a" }}>
    <Box className="flex items-center mb-[24px]">
              <Box className="flex items-center justify-center w-8 h-8 mr-2 bg-[#62483a] text-white rounded-full">
                <Typography variant="subtitle1" className="font-bold">
                  2
                </Typography>
              </Box>
              <Typography variant="h5" className="font-bold text-[#62483a]">
                Shipping Address
              </Typography>
    </Box>
    <form onSubmit={handleSubmit} noValidate>
    <div id="overAll" className='flex flex-col'>
    <div className='flex gap-[24px]'>
    <TextField
        required
        fullWidth
        id="firstName"
        label="First Name"
        value={addressInput.firstName}
        error={error.firstName > 0 }
        onChange={handleInput}
        helperText={
          (error.firstName === 1) ? "Please enter your first name" : (error.firstName === 2) ? "Invalid format" : ""
        }
        variant="outlined"
        placeholder="First Name"
        type="text"
        margin="normal"/>
        {console.log(`This is 1st name ${addressInput.firstName}`)}
        <TextField
        required
        fullWidth
        id="lastName"
        label="Last Name"
        value={addressInput.lastName}
        error={error.lastName > 0 }
        onChange={handleInput}
        helperText={
          (error.lastName === 1) ? "Please enter your last name" : (error.lastName === 2) ? "Invalid format" : ""
        }
        variant="outlined"
        placeholder="Last Name"
        type="text"
        margin="normal"/>
    </div>
    <div className='flex gap-[24px]'>
    <TextField
        required
        fullWidth
        id="emailAddress"
        label="Email Address"
        value={addressInput.emailAddress}
        error={error.emailAddress > 0 }
        onChange={handleInput}
        helperText={
          (error.emailAddress === 1) ? "Please enter your email" : (error.emailAddress === 2) ? "Invalid email format" : ""
        }
        type="email"
        variant="outlined"
        placeholder="example@email.com"
        margin="normal"/>
        <TextField
        required
        fullWidth
        id="phoneNumber"
        label="Phone Number"
        value={addressInput.phoneNumber}
        error={error.phoneNumber > 0 }
        onChange={handleInput}
        helperText={
          (error.phoneNumber === 1) ? "Please enter your phone number" : (error.phoneNumber === 2) ? "Invalid phone number format" : ""
        }
        variant="outlined"
        placeholder="+66 123-456-7890"
        type="tel"
        margin="normal"/>
    </div>
    <TextField
        required
        fullWidth
        id="addressLineOne"
        label="Address Line 1"
        value={addressInput.addressLineOne}
        error={error.addressLineOne > 0 }
        onChange={handleInput}
        helperText={
          (error.addressLineOne === 1) ? "Please enter your address" : (error.addressLineOne === 2) ? "Invalid format" : ""
        }
        variant="outlined"
        placeholder="Address Line 1"
        type="text"
        margin="normal"/>
        <TextField
        // required
        fullWidth
        id="addressLineTwo"
        label="Address Line 2"
        value={addressInput.addressLineTwo}
        error={error.addressLineTwo > 0 }
        onChange={handleInput}
        helperText={
          (error.addressLineOne === 2) ? "Invalid format" : ""
        }
        variant="outlined"
        placeholder="Address Line 2"
        type="text"
        margin="normal"/>
        {console.log(` line2: ${error.addressLineTwo}`)}
    <div className='flex gap-[24px]'>
    <TextField
        fullWidth
        id="city"
        label="City"
        value={addressInput.city}
        error={error.city > 0 }
        onChange={handleInput}
        helperText={
        (error.city === 2) ? "Invalid format" : ""
        }
        variant="outlined"
        placeholder="City"
        type="text"
        margin="normal"/>
        <TextField
        required
        fullWidth
        id="stateAndProvince"
        label="State/Province"
        value={addressInput.stateAndProvince}
        error={error.stateAndProvince > 0 }
        onChange={handleInput}
        helperText={
          (error.stateAndProvince=== 1) ? "Please enter your State/Province" : (error.stateAndProvince === 2) ? "Invalid format" : ""
        }
        variant="outlined"
        placeholder="State/Province"
        type="text"
        margin="normal"/>
    </div>
    <div className='flex gap-[24px]'>
    <TextField
        required
        fullWidth
        id="zip"
        label="ZIP/Postal Code"
        value={addressInput.zip}
        error={error.zip > 0 }
        onChange={handleInput}
        helperText={
          (error.zip === 1) ? "Please enter your ZIP" : (error.zip === 2) ? "Invalid format" : ""
        }
        variant="outlined"
        placeholder="10900 or A1A 1A1"
        margin="normal"
        type="text"
        />
        <TextField
        required
        fullWidth
        id="country"
        label="Country"
        value={addressInput.country}
        error={error.country> 0 }
        onChange={handleInput}
        helperText={
          (error.country === 1) ? "Please enter your country" : (error.country === 2) ? "you format!!!" : ""
        }
        variant="outlined"
        placeholder="Country"
        type="text"
        margin="normal"/>
    </div>
    </div>
    <Button type="submit" >Click me</Button>
    </form>
    </Paper>
  )
}

const step = [<Radio />,  testAddress, <PaymentMethod />];





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
            <ButtonSubmit onClick={handleBack} mate={activeStep === 0} label={"Back"}></ButtonSubmit>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep < steps.length - 1 && (
              // <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, background:"" }}>
                <ButtonSubmit onClick={handleSkip} label={"Skip"}></ButtonSubmit>
              // </Button>
            )}
            {/* <Button onClick={handleNext}>
            <ButtonSubmit label={Test}></ButtonSubmit>
            </Button> */}
            <ButtonSubmit onClick={handleNext} ml="16px" label={Test}> </ButtonSubmit>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
