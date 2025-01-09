import SideNav from "./SideNav";
import Box from '@mui/material/Box';


export default function DashBoard() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    height: '100vh', // Full viewport height
                    width: '100vw', // Full viewport width
                    backgroundColor: '#123456',
                    color: '#ffffff', // Adjust text color for visibility
                    // alignItems: 'center', // Center items vertically (optional)
                    // justifyContent: 'center', // Center items horizontally (optional)
                }}
            >
                <SideNav />
                <h1>DashBoard</h1>
            </Box>
        </>
    );
}