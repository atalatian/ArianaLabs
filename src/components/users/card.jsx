import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import { red } from '@mui/material/colors';

const skills = [
    {id: 0, name: 'html', label: 'HTML'},
    {id: 1, name: 'css', label: 'CSS'},
    {id: 2, name: 'javascript', label: 'Javascript'},
]


export default function BasicCard() {
    return (
        <Card elevation={10} sx={{ maxWidth: 275, m: 3 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Amir Hossein Talatian
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Age: 20
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Skills: {
                    skills.map((skill)=>{
                        return(
                            <Box sx={{ m: 1, display: `inline-block` }}>
                                <Paper sx={{ display: `flex`, alignItems: `center`,
                                    backgroundColor: `#1565c0`}}>
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
                    <Button sx={{ backgroundColor: `#f0ad4e` }}
                            variant={'contained'} size="small">Edit</Button>
                    <Button sx={{ backgroundColor: `#d9534f` }}
                            variant={'contained'} size="small">Delete</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}
