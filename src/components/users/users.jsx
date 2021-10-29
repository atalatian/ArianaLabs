import BasicCard from "./card";
import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux'
import {Grid} from "@mui/material";
import getById from "../../services/getById";

export default function Users() {

    const users = useSelector(state => state.users);
    const [borders, setBorders] = useState([]);

    useEffect(()=>{
        const borders = users.map((user)=>{
            return {id: user.id, border: false};
        })
        setBorders(borders);
    }, [users])

    return(
        <Grid container spacing={2}>
            {
                users.map((user)=>{
                    return(
                        <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
                            <BasicCard border={getById(borders, user.id)}
                                       borders={borders} setBorders={setBorders}
                                       key={user.id} user={user}/>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}