import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import textInputValidation from "./validation/textInputValidation";
import createNewState from "../../services/createNewState";
import TextInput from "./textInput";
import MultipleSelect from "./multipleSelect";
import multipleSelectValidation from "./validation/multipleSelectValidation";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function Form() {

    const [states, setStates] = useState({
        firstName: '',
        lastName: '',
        age: '',
        selectedSkills: [],
    });

    const [inputs, setInputs] = useState([
        {
            id: 0,
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            submit: {error: false, type: []},
            isValid: textInputValidation,
        },
        {
            id: 1,
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            submit: {error: false, type: []},
            isValid: textInputValidation,
        },
        {
            id: 2,
            name: 'age',
            label: 'Age',
            type: 'number',
            submit: {error: false, type: []},
            isValid: textInputValidation,
        },
        {
            id: 3,
            name: 'selectedSkills',
            label: 'Skills',
            type: 'multipleSelect',
            submit: {error: false, type: []},
            isValid: multipleSelectValidation,
        },
    ])


    const handleSave = () => {
        const newInputs = inputs.map((input, index)=>{
            const result = input.isValid(states[input.name]);
            const newInput = createNewState(input);
            newInput.submit = result;
            return newInput;
        });
        setInputs(newInputs);
    }

    const padding = 2;

    return(
        <React.Fragment>
            <Box sx={{ width: `21rem`, maxWidth: `100%`, p: padding, m: `auto`}}>
                <Paper elevation={10}>
                    <Box sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>
                        {
                            inputs.map((input)=>{
                                if (input.type === 'text' || input.type === 'number'){
                                    return(
                                        <TextInput key={input.id} input={input}
                                                   states={states} setStates={setStates} margin={padding}/>
                                    )
                                }else if (input.type === 'multipleSelect'){
                                    return(
                                        <MultipleSelect key={input.id} input={input}
                                                        states={states} setStates={setStates} margin={padding}/>
                                    )
                                }else {
                                    return null;
                                }
                            })
                        }
                        <Box sx={{ p: padding, width: `20rem`, maxWidth: `100%` }}>
                            <Button variant="contained" onClick={handleSave}>Save</Button>
                        </Box>
                    </Box>
                </Paper>

            </Box>
        </React.Fragment>
    );
}