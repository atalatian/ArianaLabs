import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useDispatch, useSelector} from 'react-redux';
import getById from "../../services/getById";
import {useEffect, useState} from "react";


const edit = createTheme({
    palette: {
        primary: {
            main: `#f0ad4e`,
        }
    }
});

const del = createTheme({
    palette: {
        primary: {
            main: `#d9534f`,
        }
    }
});

export default function BasicCard(props) {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const form = useSelector(state => state.form);
    const [border, setBorder] = useState({});

    const handleDelete = (userId) => {
        dispatch({type: 'DELETE_USER', payload: userId})
    }

    useEffect(()=>{
        setBorder(props.border);
    }, [props.borders])

    const handleEdit = (userId) => {
        const user = getById(users, userId);
        dispatch({type: 'GO_EDIT', payload: user});
        const borders = props.borders.map((border)=>{
            border.border = border.id === userId;
            return border;
        });
        props.setBorders(borders);
    }

    const handleBorder = () => {
        if (border){
            if (border.border){
                return '5px #f0ad4e solid'
            }else {
                return ''
            }
        }
    }

    return (
        <Card elevation={10} sx={{ border: `${handleBorder()}` }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {`${props.user.firstName} ${props.user.lastName}`}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Age: {`${props.user.age}`}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Skills: {
                    props.user.selectedSkills.map((skill)=>{
                        return(
                            <Box sx={{ m: 1, display: `inline-block` }}>
                                <Paper sx={{ display: `flex`, alignItems: `center`,
                                    backgroundColor: `#1565c0`, borderRadius: `24px`}}>
                                    <Typography sx={{ p: 1, m: 0 }} variant="subtitle2" color={`#fff`}
                                                display="block" gutterBottom>
                                        {skill.label}
                                    </Typography>
                                </Paper>
                            </Box>
                        );
                    })
                }
                </Typography>
                <CardActions>
                    <ThemeProvider theme={edit}>
                        <Button onClick={()=> handleEdit(props.user.id)}
                                variant={'contained'} size="small">Edit</Button>
                    </ThemeProvider>
                    <ThemeProvider theme={del}>
                        <Button onClick={()=> handleDelete(props.user.id)}
                                variant={'contained'} size="small">Delete</Button>
                    </ThemeProvider>
                </CardActions>
            </CardContent>
        </Card>
    );
}
