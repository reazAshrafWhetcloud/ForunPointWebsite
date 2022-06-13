import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

function DropDown() {
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></MenuIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="text-size global-text global-font-family">
          <Link
            className={
              pathname.includes("/about-us") ? "link-color" : "nav-link-color"
            }
            to="/about-us"
          >
            ABOUT US
          </Link>
        </MenuItem>
        <MenuItem className="menu-line text-size global-text global-font-family">
          <Link
            className={
              pathname.includes("/service") ? "link-color" : "nav-link-color"
            }
            to="/service"
          >
            SERVICES
          </Link>
        </MenuItem>
        <MenuItem className="menu-line text-size global-text global-font-family">
          <Link
            className={
              pathname.includes("/driver") ? "link-color" : "nav-link-color"
            }
            to="/driver"
          >
            DRIVER
          </Link>
        </MenuItem>
        <MenuItem className="menu-line text-size global-text global-font-family">
          <Link
            className={
              pathname.includes("/business") ? "link-color" : "nav-link-color"
            }
            to="/business"
          >
            BUSINESS
          </Link>
        </MenuItem>
        <MenuItem className="menu-line text-size global-text global-font-family">
          <Link
            className={
              pathname.includes("/investor")
                ? "link-color"
                : "nav-link-color"
            }
            to="/investor"
          >
            INVESTOR
          </Link>
        </MenuItem>
        <MenuItem className="menu-line text-size global-text global-font-family">
          <Link
            className={
              pathname.includes("/blog") ? "link-color" : "nav-link-color"
            }
            to="/blog"
          >
            BLOG
          </Link>
        </MenuItem>
        <MenuItem className="menu-line text-size global-text global-font-family">
          <Link
            className={
              pathname.includes("/faq") ? "link-color" : "nav-link-color"
            }
            to="/faq"
          >
            FAQ
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default DropDown;
