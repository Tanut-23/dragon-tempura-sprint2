import { Button, IconButton, Stack, Typography } from "@mui/material";
import Tag from "./components/Tag";
import StatusTag from "./components/StatusTag";
import LimitTags from "./components/TagSeller";
  
export default function App() {
  return (
    <div className="flex flex-col gap-[32px] mt-[24px] ml-[64px]">
    <Stack spacing={2} direction="row" alignItems={"center"} sx={{mt:5, ml:5}}>
     <Tag nameTag="Classic"  linkPath="https://www.google.com" />
     <StatusTag  statusTag="Deliver"/>
     <StatusTag  statusTag="Preparing"/>
     <StatusTag  statusTag="InTransit"/>
     <StatusTag  statusTag="Cancel"/>
    </Stack>
    <LimitTags />
    </div>
    
  );
}
