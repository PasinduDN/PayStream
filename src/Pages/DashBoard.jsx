import SideNav from "./SideNav";
import Box from '@mui/material/Box';
import Colors from "../assets/Styles/Colors";
import { Container, Typography, Grid, Grid2 } from '@mui/material';
import { useState, useEffect } from "react";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";


export default function DashBoard() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [testData, setTestData] = useState([]);
    const userCollectionref = collection(db, "TestCollection");

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(userCollectionref);
            setTestData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log("testData", testData);

        }
        getData();
    }, [])

    const createData = async () => {
        await addDoc (userCollectionref, {name:newName, age:newAge});
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    height: '100vh', // Full viewport height
                    width: '100vw', // Full viewport width
                    background: Colors.palette.general.color01,
                    color: '#ffffff', // Adjust text color for visibility
                    marginTop: '40px'
                    // alignItems: 'center', // Center items vertically (optional)
                    // justifyContent: 'center', // Center items horizontally (optional)
                }}
            >
                <SideNav />
                <h1>DashBoard</h1>
                {testData.map((data) => {
                    return (
                        <div>
                            {" "}
                            <h1>Name: {data.name}</h1>
                            <h1>Age: {data.age}</h1>
                        </div>
                    )
                })}
                <div className="App">
                    <input
                        placeholder="Name"
                        onChange={(event) => {
                            setNewName(event.target.value)
                        }}
                    >
                    </input>
                    <input
                        type="number"
                        placeholder="Name"
                        onChange={(event) => {
                            setNewAge(event.target.value)
                        }}
                    >
                    </input>
                </div>
            </Box>
        </>
    );
}