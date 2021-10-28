import {BarChart, CartesianGrid, XAxis, YAxis,
    Tooltip, Legend, Bar, ResponsiveContainer}
    from "recharts";

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
        <BarChart data={data} width={500} height={500}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
    );
}