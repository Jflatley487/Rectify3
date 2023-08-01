// Import necessary components
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Auth from "../../utils/auth";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// Define an empty array 'pages'
const pages = [];

// Define the 'Header' function
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Event handlers for opening and closing navigation and user menus
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Function for logging out the user when 'LOGOUT' button is clicked
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // Return JSX for rendering the header section of the application
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: "0.2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Rectify
          </Typography>

          {/* Box component for mobile navigation menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>

            {/* Menu component for mobile navigation */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Mapping through 'pages' (empty array, currently unused) */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Typography component for 'Rectify' logo (only visible on mobile) */}
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Rectify
          </Typography>

          {/* Box component for desktop navigation links */}
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Box for user authentication links */}
          <div>
            {Auth.loggedIn() ? (
              // Render links for authenticated users
              <>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  <Button variant="outline">HOME</Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/about"
                >
                  <Button variant="outline">ABOUT</Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/therapists"
                >
                  <Button variant="outline">THERAPISTS</Button>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }}>
                  <Button
                    variant="outline"
                    onClick={(event) => {
                      logout(event);
                      window.location.href = "/";
                    }}
                    >
                    LOGOUT
                  </Button>
                </Link>
              </>
                    //* Render links for non-authenticated users */
            ) : (
              <>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  <Button variant="outline">HOME</Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/about"
                >
                  <Button variant="outline">ABOUT</Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/login"
                >
                  <Button variant="outline">LOGIN</Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/signup"
                >
                  <Button variant="outline">SIGN UP</Button>
                </Link>
              </>
            )}
          </div>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

// Export the 'Header' component
export default Header;
