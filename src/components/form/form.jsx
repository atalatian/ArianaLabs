import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import textInputValidation from "./validation/textInputValidation";
import createNewState from "../../services/createNewState";
import TextInput from "./textInput";
import MultipleSelect from "./multipleSelect";
import multipleSelectValidation from "./validation/multipleSelectValidation";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from 'react-redux';
import createStates from "../../services/createStates";
import {createTheme, ThemeProvider} from "@mui/material/styles";


const edit = createTheme({
    palette: {
        primary: {
            main: `#f0ad4e`,
        }
    }
});

export default function Form() {

    const dispatch = useDispatch()
    const skills = useSelector(state => state.skills);
    const form = useSelector(state => state.form);

    const [states, setStates] = useState({});

    const [inputs, setInputs] = useState([
        {
            id: 0,
            defaultValue: '',
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            submit: {error: false, type: []},
            isValid: textInputValidation,
        },
        {
            id: 1,
            defaultValue: '',
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            submit: {error: false, type: []},
            isValid: textInputValidation,
        },
        {
            id: 2,
            defaultValue: '',
            name: 'age',
            label: 'Age',
            type: 'number',
            submit: {error: false, type: []},
            isValid: textInputValidation,
        },
        {
            id: 3,
            defaultValue: [],
            name: 'selectedSkills',
            label: 'Skills',
            type: 'multipleSelect',
            submit: {error: false, type: []},
            isValid: multipleSelectValidation,
        },
    ])

    useEffect(()=>{
        setStates(createStates(inputs, form.defaultValue));
    }, [inputs, form])

    const isSuccessful = () => {
        let valid = true;
        const newInputs = inputs.map((input, )=>{
            const result = input.isValid(states[input.name]);
            if (result.error){
                valid = false;
            }
            const newInput = createNewState(input);
            newInput.submit = result;
            return newInput;
        });
        setInputs(newInputs);

        return valid;
    }

    const renderButtons = () => {
        if (form.variant === 'create'){
            return(
                <Button variant="contained" onClick={handleSave}>Save</Button>
            );
        }else if (form.variant === 'edit'){
            return (
                <ThemeProvider theme={edit}>
                    <Button variant="contained" onClick={handleFinish}>Finish</Button>
                </ThemeProvider>
            );
        }
    }

    const handleFinish = () => {
        if (isSuccessful()){
            const id = form.defaultValue.id
            dispatch({type: 'EDIT_USER', payload: {...states, id}})
            dispatch({type: 'GO_CREATE'})
        }
    }

    const handleSave = () => {
        if (isSuccessful()){
            dispatch({type: 'ADD_USER', payload: states})
        }
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
                                                        states={states} setStates={setStates}
                                                        margin={padding} options={skills}/>
                                    )
                                }else {
                                    return null;
                                }
                            })
                        }
                        <Box sx={{ p: padding, width: `20rem`, maxWidth: `100%` }}>
                            {renderButtons()}
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </React.Fragment>
    );
}