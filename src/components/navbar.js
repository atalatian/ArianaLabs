import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} to={`/`} color="inherit">Main</Button>
                    <Button component={Link} to={`/chart`} color="inherit">Chart</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
