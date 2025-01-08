import SideNav from "./SideNav";
import Box from '@mui/material/Box';


export default function Company() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <h1>Company</h1>
            </Box>

        </>
    );
}