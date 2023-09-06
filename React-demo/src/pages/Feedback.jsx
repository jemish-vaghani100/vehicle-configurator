import React from 'react';
import Navbar from '../component/Navbar';
import Box from '@mui/material/Box';
import Topbar from '../component/Topbar';
import Footer from '../component/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar />

      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Topbar />
        
        <Box sx={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          <h1>Feedback</h1>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

export default App;
