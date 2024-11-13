import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem, IconButton, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logged out");
    handleMenuClose();
  };

  return (
    <AppBar className="app-header">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Display the user's avatar */}
          <Avatar sx={{ marginRight: 1 }} alt="User Name" src="/path-to-avatar.jpg" />
          
          {/* Display the user's name */}
          <Typography variant="subtitle1" sx={{ marginRight: 2 }}>
            John Doe
          </Typography>

          {/* Dropdown menu for logout */}
          <IconButton
            onClick={handleMenuOpen}
            size="small"
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
