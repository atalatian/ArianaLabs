import BasicCard from "./card";
import React from "react";
import Box from "@mui/material/Box";

export default function Users() {
    return(
        <Box sx={{ display: `flex`, flexWrap: 'wrap', justifyContent: `space-evenly`}}>
            <BasicCard/>
            <BasicCard/>
            <BasicCard/>
            <BasicCard/>
            <BasicCard/>
        </Box>
    );
}