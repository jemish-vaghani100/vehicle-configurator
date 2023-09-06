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
          <h1>About</h1>
          <p>
            ligendi nostrum pariatur esse, sed illo temporibus excepturi corporis voluptatibus non beatae. Quis, exercitationem repudiandae consequuntur in corrupti qui obcaecati odit molestias.
          </p>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

export default App;
