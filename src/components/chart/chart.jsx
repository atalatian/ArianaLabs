import {BarChart, CartesianGrid, XAxis, YAxis,
    Tooltip, Legend, Bar, ResponsiveContainer}
    from "recharts";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useSelector } from 'react-redux';
import React, {useEffect, useState} from "react";
import countSkills from "../../services/countSkills";

export default function Chart(){

    const [data, setData] = useState();
    const users = useSelector(state => state.users);
    const skills = useSelector(state => state.skills);

    useEffect(()=>{
        setData(countSkills(users, skills));
    }, [users, skills])

    return(
        <Box sx={{ width: 600, m: `auto`, mt: 2, maxWidth: `100%`}}>
            <Paper sx={{ p: 3 }} elevation={10}>
                <ResponsiveContainer width={`100%`} aspect={1.2}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Box>
    );
}