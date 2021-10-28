import {BarChart, CartesianGrid, XAxis, YAxis,
    Tooltip, Legend, Bar, ResponsiveContainer}
    from "recharts";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const data = [
    {
        "name": "HTML",
        "amount": 100,
    },
    {
        "name": "CSS",
        "amount": 200,
    },
    {
        "name": "JavaScript",
        "amount": 300,
    },
]


export default function Chart(){
    return(
        <Box sx={{ width: 550, m: `auto`, mt: 2}}>
            <Paper sx={{ p: 3 }} elevation={10}>
                <BarChart data={data} width={500} height={500}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#82ca9d" />
                </BarChart>
            </Paper>
        </Box>
    );
}