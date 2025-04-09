import { Box, Stack, Typography, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'

function TimeBlock({num,text}) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 0.5}}>
            <Paper sx={{height:30, lineHeight: '30px', width:36, backgroundColor: 'primary.lightChocolate', color: 'white', textAlign: 'center', fontWeight: 600}}>{num}</Paper>
            <Typography sx={{textAlign: 'center', fontSize: '0.875rem', color: 'primary.chocolate'}}>{text}</Typography>
        </Box>
    )
}

export default function RemainingBlock({day, hour, min, sec}) {
    // Change {days, hours, min, sec} to SECOND
    // const initialTime = Number(day)*(86400) + Number(hour)*(3600) + Number(min)*(60) + Number(sec);  // const initialTime = 1*(86400) + 2*(3600) + 55*(60) + 10 // {days, hours, min, sec} = {1, 2, 55, 10} 
    const initialTime = 65;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
       const interval = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev <= 1) {
                return 0;
            } 
            let newTimeLeft = prev - 1;
            console.log(newTimeLeft)
            return newTimeLeft
           });
        }, 1000);

       return  () => clearInterval(interval);
    }, [timeLeft]);

    //Change SECOND to {days, hours, min, sec}
    const remainingDays = Math.floor(timeLeft / 86400); 
    const remainingHours = Math.floor((timeLeft % 86400) / 3600); 
    const remainingMin = Math.floor((timeLeft % 3600) / 60);
    const remainingSec = timeLeft % 60;

    return (
    <Stack direction='row' spacing={1} sx={{width: '250px', paddingLeft: 10, marginBottom: 0}}>
        <TimeBlock num={String(remainingDays).padStart(2,'0')} text='Days' />
        <Typography sx={{lineHeight: '30px', color: 'primary.chocolate'}}>:</Typography>
        <TimeBlock num={String(remainingHours).padStart(2,'0')} text='Hours' />
        <Typography sx={{lineHeight: '30px', color: 'primary.chocolate'}}>:</Typography>
        <TimeBlock num={String(remainingMin).padStart(2,'0')} text='Min' />
        <Typography sx={{lineHeight: '30px', color: 'primary.chocolate'}}>:</Typography>
        <TimeBlock num={String(remainingSec).padStart(2,'0')} text='Sec' />
    </Stack>
  )
}
