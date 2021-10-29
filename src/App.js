import CssBaseline from '@mui/material/CssBaseline';
import Form from "./components/form/form";
import Users from "./components/users/users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Chart from "./components/chart/chart";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Navbar from "./components/navbar";
import {useEffect} from "react";

function App() {

    useEffect(()=>{
        //localStorage.removeItem('users');
        //localStorage.removeItem('id');
    }, [])


    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <CssBaseline/>
                    <Navbar/>
                    <Container maxWidth='lg'>
                        <Form/>
                        <Box sx={{ p: 2 }}> </Box>
                        <Users/>
                    </Container>
                </Route>
                <Route exact path="/chart">
                    <CssBaseline/>
                    <Navbar/>
                    <Container maxWidth='lg'>
                        <Chart/>
                    </Container>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
