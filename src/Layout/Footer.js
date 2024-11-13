import React from 'react';
import { Box, Typography } from '@mui/material';
import { FOOTER_TEXT } from '../Constants/Common';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center' }}>
      <Typography variant="body2">&copy; {FOOTER_TEXT}</Typography>
    </Box>
  );
}

export default Footer;
