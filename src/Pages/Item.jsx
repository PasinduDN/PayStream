import SideNav from "./SideNav";
import Box from '@mui/material/Box';
import Colors from "../assets/Styles/Colors";

export default function Item() {
    return (
        <>
            <Box sx={{
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
                <h1>Item</h1>
            </Box>

        </>
    );
}