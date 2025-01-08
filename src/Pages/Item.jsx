import SideNav from "./SideNav";
import Box from '@mui/material/Box';


export default function Item() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <h1>Item</h1>
            </Box>

        </>
    );
}