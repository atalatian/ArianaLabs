import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Amir Hossein Talatian
                </Typography>
                <Typography variant="body2">
                    <p>Age: 20</p>
                    <p>Skills: HTML, CSS, JavaScript</p>
                </Typography>
                <CardActions>
                    <Button variant={'contained'} size="small">Edit</Button>
                    <Button variant={'contained'} size="small">Delete</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}
