import React, { useState } from "react";
import {
  MenuItem,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
} from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function AppMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "30px", mr: 1 }}>
              <img
                src={"/images/ballLogo.png"}
                width={"100%"}
                alt="ball logo"
              />
            </Box>
            <Typography
              noWrap
              variant="h6"
              textAlign={"center"}
              color={"#2E3192"}
              fontWeight={"bolder"}
            >
              HILLO FOOTBALL
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                sx={{
                  p: 0,
                }}
                onClick={handleOpenUserMenu}
              >
                <Avatar
                  alt="Name"
                  sx={{
                    borderRadius: "10px",
                    border: "1.4px solid #00ADEF; ",
                    background: "transparent",
                    color: "#2E3192",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
