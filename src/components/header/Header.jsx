import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { HashLink as Link } from "react-router-hash-link";

const drawerWidth = 240;
const navItems = [
  "mi az access bars",
  "gyerekeknek",
  "időpontok",
  "árak",
  "elérhetőség",
];

const navItemStyl = {
  color: "black",
  fontFamily: "Karla",
  textTransform: "lowercase",
  padding: 7,
  cursor: "pointer",
};

function DrawerAppBar(props) {
  const { Window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isShrunk, setShrunk] = useState(false);
  const transitionSpeed = "0.6s";
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }
        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => {
          let hashTagAdd = `#${item.replace(/ /g, "")}`;
          return (
            <Link to={hashTagAdd}>
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText
                    sx={{ fontFamily: "roboto", textTransform: "lowercase" }}
                    primary={item}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Box id="logo">
        <img
          alt="Access Bars Dunakeszi"
          style={{
            width: "50%",
            padding: "10px",
            position: "absolute",
            bottom: "5%",
            right: "50%",
            transform: "translatex(50%)",
          }}
          src={require("../../img/dark logo text.png")}
        />
      </Box>
    </Box>
  );

  const container =
    Window !== undefined ? () => Window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          backgroundColor: { xs: "transparent", sm: "#fcf1de" },
          height: isShrunk ? "70px" : "105px",
          transition: "0.6s",
          boxShadow: { xs: "none", sm: "0px 2px 4px -1px rgb(0 0 0 / 20%)" },
        }}
        component="nav"
      >
        <Toolbar sx={{ right: "0px", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }} id="logo">
            <a href="#landing">
              <img
                alt="access bars Dunakeszi"
                style={{
                  height: isShrunk ? "60px" : "80px",
                  padding: "10px",
                  transition: transitionSpeed,
                  paddingLeft: "30px",
                }}
                className="logo"
                src={require("../../img/dark logo text.png")}
              />
            </a>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => {
              let hashTagAdd = `#${item.replace(/ /g, "")}`;
              return (
                <Link to={hashTagAdd}>
                  <Typography
                    variant="body2"
                    sx={{
                      borderBottom: "1.5px solid #fcf1de",
                      transition: ".5s",
                      "&:hover": {
                        borderBottom: "1.5px solid #292929",
                      },
                    }}
                    style={navItemStyl}
                    key={item}
                  >
                    {item}
                  </Typography>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  Window: PropTypes.func,
};

export default DrawerAppBar;
