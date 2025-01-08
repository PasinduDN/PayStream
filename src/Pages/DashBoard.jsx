import SideNav from "./SideNav";
import Box from '@mui/material/Box';


export default function DashBoard() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <h1>DashBoard</h1>
            </Box>

        </>
    );
}