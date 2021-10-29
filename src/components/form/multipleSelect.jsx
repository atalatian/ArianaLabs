import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CancelIcon from '@mui/icons-material/Cancel';
import Paper from '@mui/material/Paper';
import getById from "../../services/getById";
import removeDuplicate from "../../services/removeDuplicate";
import createNewState from "../../services/createNewState";
import massages from "./validation/massages";
import filterById from "../../services/filterById";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import {Alert} from "@mui/material";


export default function MultipleSelect(props) {
    const [value, setValue] = React.useState();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleTagAddition = (skillId) => {
        let tags = [...props.states.selectedSkills]
        tags.push(getById(props.options, skillId));
        tags = removeDuplicate(tags);
        const newStates = createNewState(props.states);
        newStates.selectedSkills = tags;
        props.setStates(newStates);
    }

    const handleDeleteTag = (tagID) => {
        let tags = [...props.states.selectedSkills]
        tags = filterById(tags, tagID);
        const newStates = createNewState(props.states);
        newStates.selectedSkills = tags;
        props.setStates(newStates);
    }

    return (
        <Box sx={{ p: props.margin, maxWidth: `100%`, width: `20rem` }}>
            <FormControl sx={{ width: `100%`, }}>
                <InputLabel id="demo-simple-select-helper-label">{props.input.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={value}
                    error={props.input.submit.error}
                    label={props.input.label}
                    onChange={handleChange}
                >
                    {
                        props.options.map((skill)=>{
                            return(<MenuItem onClick={()=>handleTagAddition(skill.id)}
                                             key={skill.id} value={skill.id}>{skill.label}</MenuItem>);
                        })
                    }
                </Select>
            </FormControl>
            <div>
                {
                    (props.states.selectedSkills || []).map((selectedSkill)=>{
                        return(
                            <Box sx={{ m: 1, display: `inline-block` }} key={selectedSkill.id}>
                                <Paper sx={{ display: `flex`, alignItems: `center`,
                                    backgroundColor: `#1565c0`, borderRadius: `24px`}}>
                                    <Typography sx={{ p: 1, m: 0 }} variant="subtitle2" color={`#fff`}
                                                display="block" gutterBottom>
                                        {selectedSkill.label}
                                    </Typography>
                                    <IconButton color="primary"
                                                sx={{ p: 0.5 }}
                                                aria-label="Delete Tag" href="#"
                                                onClick={()=>handleDeleteTag(selectedSkill.id)}>
                                        <CancelIcon sx={{ fontSize: `1rem`, color: `#fff` }}/>
                                    </IconButton>
                                </Paper>
                            </Box>
                        )
                    })
                }
            </div>
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

