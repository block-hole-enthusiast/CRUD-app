import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <Box display="flex" margin='50px' padding='20px' justifyContent='center' alignItems = 'center' minHeight='50vh' border='2px dashed grey'> 
            <Typography variant="h1" align='center'>CRUD Application</Typography>
        </Box>
    )
}

export default Home;