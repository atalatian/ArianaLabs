import TextField from "@mui/material/TextField";
import React from "react";
import massages from "./validation/massages";
import createNewState from "../../services/createNewState";
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import {Alert} from "@mui/material";

export default function TextInput(props){

    const handleTextInputChange = (e, name) => {
        const newStates = createNewState(props.states);
        newStates[name] = e.target.value;
        props.setStates(newStates);
    }

    return(
        <Box sx={{ p: props.margin, maxWidth: `100%`, width: `20rem` }}>
            <TextField
                sx={{ width: `100%` }}
                value={props.states[props.input.name]}
                error={props.input.submit.error}
                inputProps={{type: `${props.input.type}`}}
                id="outlined-required"
                label={`${props.input.label}`}
                onChange={
                    (e)=>
                        handleTextInputChange(e, props.input.name)
                }
            />
            <div>
                {
                    props.input.submit.type.map((massage)=>{
                        return(
                            <Alert severity="error">{massages[massage]}</Alert>
                        )
                    })
                }
            </div>
        </Box>
    );
}