import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'lightgray',
        padding: '20px',
        textAlign: 'center',
        marginTop: 'auto', // Push the footer to the bottom
      }}
    >
      <Button variant="outlined" sx={{ marginRight: 2 }}>
        Featured
      </Button>
      <Button variant="outlined">Subscribe</Button>

      <Typography variant="body2" sx={{ marginTop: '20px' }}>
        Copyright © 2023 My Website. All rights reserved.
      </Typography>

      <Typography variant="body2" sx={{ marginTop: '10px' }}>
        <Link href="#">Privacy Policy</Link> | <Link href="#">Contact Us</Link>
      </Typography>
    </Box>
  );
}

export default Footer;
