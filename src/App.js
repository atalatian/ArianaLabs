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

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <CssBaseline/>
                    <Container maxWidth='lg'>
                        <Form/>
                        <Users/>
                    </Container>
                </Route>
                <Route exact path="/chart">
                    <CssBaseline/>
                    <Chart/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
